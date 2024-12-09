import { setup, createPage, url } from '@nuxt/test-utils/e2e';
import { expect } from '@nuxt/test-utils/playwright';
import { beforeEach, describe, test } from 'vitest';

describe('App', { timeout: 60000 }, async () => {
  await setup();

  describe('Content Renders', async () => {
    const page = await createPage();

    beforeEach(async () => {
      await page.goto(url('/'));
    }, 20000);

    test('About Me', async () => {
      await expect(page.getByRole('heading', { name: 'Harry Nguyen' })).toBeVisible();
      await expect(
        page.getByRole('heading', { name: 'Software Engineer' })
      ).toBeVisible();
      await expect(page.getByText("I'm a software engineer")).toBeVisible();
    });

    test('Work Experience', async () => {
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
  });
});
