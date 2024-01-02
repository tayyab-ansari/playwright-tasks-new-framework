import {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    expect: {
        timeout: 20 * 1000,
    },
    testDir: 'tests',
    testMatch: '*.spec.ts',
    reporter: [
        ['html', {open: 'never'}]
    ],
    timeout: 1880 * 1000,
    reportSlowTests: null,
    snapshotPathTemplate: 'data/screenshots/{testFileDir}/{arg}{ext}',
    use: {
        baseURL: 'https://www.saucedemo.com',
        browserName: 'chromium',
        headless: false,
        video: 'on',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        bypassCSP: true,
        launchOptions: {
            downloadsPath: 'test-results/downloads/',
            args: ['--disable-web-security', '--ignore-certificate-errors']
        },
        actionTimeout: 20 * 1000,
        navigationTimeout: 20 * 1000,
        
    }
}
export default config
