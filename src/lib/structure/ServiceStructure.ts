import type { Awaitable } from '@sapphire/utilities';
import { Browser, chromium, type Page } from 'playwright';
import type { ServiceOptions } from '../types/options';

export abstract class StructureService {
	public constructor(public url: ServiceOptions) {}

	/**
	 * The method to get the latest anime releases
	 * @since 0.0.2
	 */
	public abstract lastAnimes(): Awaitable<unknown>;

	/**
	 * The method to create a new page
	 * @since 0.0.2
	 */
	public async newPage(url?: string): Promise<[Page, Browser]> {
		const browser = await chromium.launch();
		const page = await browser.newPage();
		await page.goto(url ? url : this.url);

		return [page, browser];
	}

	public toString(): string {
		return this.constructor.name;
	}
}
