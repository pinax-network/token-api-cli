import { describe, expect, test } from 'bun:test';
import { version } from './package.json';

// Offline smoke test: --version and --help print without calling the API.
function run(...args: string[]) {
  const proc = Bun.spawnSync([process.execPath, 'cli.ts', ...args], { cwd: import.meta.dir });
  return { code: proc.exitCode, out: proc.stdout.toString() };
}

describe('cli', () => {
  test('--version prints the package version', () => {
    const { code, out } = run('--version');
    expect(code).toBe(0);
    expect(out.trim()).toBe(version);
  });

  test('--help lists the evm and svm commands', () => {
    const { code, out } = run('--help');
    expect(code).toBe(0);
    expect(out).toContain('evm');
    expect(out).toContain('svm');
  });
});
