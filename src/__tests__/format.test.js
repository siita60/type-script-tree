const { format } = require('../format');

// 空のディレクトリ確認
describe('format', () => {
  test('only root', () => {
    expect(
      format({
        type: 'directory',
        name: 'root',
        children: [],
      }),
    ).toMatchSnapshot();
  });
});
