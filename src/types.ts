interface BaseNode<T>{
  type: T;
  name: string;
}

// ファイルの構造を示す。Tにfileを指定して、nameとがっちゃんこする
export interface FileNode extends BaseNode<'file'> {}

// ディレクトリの構造を示す。Tにdirectoryを指定して、nameとchildrenをくっつけてがっちゃんこする
export interface DirectoryNode extends BaseNode<'directory'>{
  children: TreeNode[];
}

// tree構造の一部を示すものとして、ファイルもしくはディレクトリを示すことを明示する(union型というやつ)
export type TreeNode = FileNode | DirectoryNode;

export interface Options {
  level: number;
}
