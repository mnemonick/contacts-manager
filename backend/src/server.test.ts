import {describe, it, expect} from 'vitest';

describe('GET /', () => {
	it('должен вернуть статус 200 и текст "Hello World!"', async () => {
		const response = await fetch('http://localhost:8000');
		const body = await response.text();

		expect(response.status).toBe(200);
		expect(body).toBe('egorka-response');
	});
});