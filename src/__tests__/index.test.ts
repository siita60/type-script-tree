import { main } from "../";

// 空のディレクトリ確認
describe("toy-tree", () => {
  let stdout: jest.Mock;
  let stderr: jest.Mock;
  const exec = (argv: string[]) => main(argv, stdout, stderr);

  beforeEach(() => {
    stdout = jest.fn();
    stderr = jest.fn();
  });

  test("fixtures", () => {
    const code = exec(["fixtures"]);
    expect(stdout.mock.calls[0][0]).toMatchSnapshot();
    expect(code).toBe(0);
  });
});
