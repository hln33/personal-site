import { setup, createPage, url } from '@nuxt/test-utils/e2e';
import { expect } from '@nuxt/test-utils/playwright';
import { chromium } from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';
import { describe, test } from 'vitest';

describe('App', { timeout: 60000 }, async () => {
  await setup();

  describe('Content renders for', () => {
    const generatePage = async () => {
      const page = await createPage();

      await page.goto(url('/'));

      return page;
    };

    test('toolbar', async () => {
      const page = await generatePage();

      const toolbar = page.getByRole('toolbar');
      await expect(toolbar).toBeVisible();

      const navBar = toolbar.getByRole('navigation');
      await expect(navBar).toBeVisible();
      await expect(navBar.getByText('Experience')).toBeVisible();
      await expect(navBar.getByText('Projects')).toBeVisible();

      const themeToggle = toolbar.getByLabel('Theme toggle');
      await expect(themeToggle).toBeVisible();
    });

    test('About Me', async () => {
      const page = await generatePage();

      await expect(page.getByRole('heading', { name: 'Harry Nguyen' })).toBeVisible();
      await expect(
        page.getByRole('heading', { name: 'Software Engineer' })
      ).toBeVisible();
      await expect(page.getByText("I'm a software engineer")).toBeVisible();

      await expect(
        page.getByRole('button', { name: 'Link to personal GitHub account' })
      ).toBeVisible();
      await expect(
        page.getByRole('button', { name: 'Link to LinkedIn account' })
      ).toBeVisible();
    });

    test('Work Experience', async () => {
      const page = await generatePage();

      await expect(
        page.getByRole('heading', { exact: true, name: 'Experience' })
      ).toBeVisible();

      await expect(
        page.getByRole('heading', { name: 'Motorola Solutions' })
      ).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Jan - Sept 2024' })).toBeVisible();
      await expect(
        page.getByRole('heading', { name: 'Software Developer Co-op' })
      ).toBeVisible();

      await expect(page.getByRole('heading', { name: 'ICBC' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Jan - Sept 2022' })).toBeVisible();
      await expect(
        page.getByRole('heading', { name: 'Application Developer Co-op' })
      ).toBeVisible();

      await expect(
        page.getByRole('link', { exact: true, name: 'View Full Resumé' })
      ).toBeVisible();
    });

    test('Projects', async () => {
      const page = await generatePage();

      await expect(
        page.getByRole('heading', { exact: true, name: 'Projects' })
      ).toBeVisible();

      await expect(
        page.getByRole('heading', { name: 'Community Based Rehabilitation' })
      ).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Fall 2024' })).toBeVisible();

      await expect(page.getByRole('heading', { name: 'Rlox' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Summer 2024' })).toBeVisible();

      await expect(
        page.getByRole('heading', { name: 'NBA All-Star Classifier' })
      ).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Summer 2023' })).toBeVisible();

      await expect(
        page.getByRole('heading', { name: 'Investment Simulator' })
      ).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Spring 2023' })).toBeVisible();
    });
  });

  describe('Theme toggle', () => {
    const DARK_MODE_CLASS = 'dark-mode';
    const THEME_TOGGLE_LABEL = 'Theme toggle';

    test('initially sets page to dark mode based on user preference', async () => {
      const page = await createPage();
      await page.emulateMedia({ colorScheme: 'dark' });
      await page.goto(url('/'));

      const root = await page.locator('html');
      await expect(root).toHaveClass(DARK_MODE_CLASS);
    });

    test('initially sets page to light mode based on user preference', async () => {
      const page = await createPage();
      await page.emulateMedia({ colorScheme: 'light' });
      await page.goto(url('/'));

      const root = await page.locator('html');
      await expect(root).not.toHaveClass(DARK_MODE_CLASS);
    });

    test('can switch from dark to light mode', async () => {
      const page = await createPage();
      await page.emulateMedia({ colorScheme: 'dark' });
      await page.goto(url('/'));

      const root = await page.locator('html');
      const themeToggle = await page.getByLabel(THEME_TOGGLE_LABEL);

      await expect(root).toHaveClass(DARK_MODE_CLASS);
      await expect(themeToggle).toBeChecked();

      await themeToggle.click();

      await expect(themeToggle).not.toBeChecked();
      await expect(root).not.toHaveClass(DARK_MODE_CLASS);

      await page.reload();

      await expect(themeToggle).not.toBeChecked();
      await expect(root).not.toHaveClass(DARK_MODE_CLASS);
    });

    test('can switch from light to dark mode', async () => {
      const page = await createPage();
      await page.emulateMedia({ colorScheme: 'light' });
      await page.goto(url('/'));

      const root = await page.locator('html');
      const themeToggle = await page.getByLabel(THEME_TOGGLE_LABEL);

      await expect(root).not.toHaveClass(DARK_MODE_CLASS);
      await expect(themeToggle).not.toBeChecked();

      await themeToggle.click();

      await expect(themeToggle).toBeChecked();
      await expect(root).toHaveClass(DARK_MODE_CLASS);

      await page.reload();

      await expect(themeToggle).toBeChecked();
      await expect(root).toHaveClass(DARK_MODE_CLASS);
    });
  });

  describe('Scan for automatically detectable accessibility issues', async () => {
    const generatePage = async () => {
      const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto(url('/'));

      return page;
    };

    test('in dark mode', async () => {
      const page = await generatePage();

      await page.evaluate(() => localStorage.setItem('darkMode', 'true'));
      await page.reload();
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('in light mode', async () => {
      const page = await generatePage();

      await page.evaluate(() => localStorage.setItem('darkMode', 'false'));
      await page.reload();
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
