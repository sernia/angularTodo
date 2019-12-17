import { Component } from '@angular/core';

/**
 * クラス <ジェネリック>
 */
class BodyContent<T> {

  /** 読み取り専用プロパティ */
  readonly createdAt: Date;

  /** 公開プロパティ */
  public updatedAt: Date;

  /** 非公開プロパティ */
  private _content: T;

  /** クラス変数 */
  static classInfo = 'BodyContent Class.';

  /** Getter */
  get content(): T {
    return this._content;
  }

  /** Setter */
  set content(value: T) {
    this.updatedAt = new Date();
    this._content = value;
  }

  /**
   * コンストラクタ
   */
  constructor(content?: T) {
    this._content = content;
    this.createdAt = new Date();
  }

  /** 公開メソッド */
  publicMethod() {

    // ブロック内のスコープの変数
    let letVal = '再代入可能';
    const constVal = '再代入不可';

    return letVal + constVal;
  }

  /** 非公開メソッド */
  private privateMethod() {
  }
}

/**
 * 抽象クラス
 */
abstract class AbstractComponent {

  body: BodyContent<string>;

  constructor(public title: string, public subTitle?: string) {
    this.body = new BodyContent();
  }
}

/**
 * インターフェース
 */
interface InterfaceComponent {

  /** プロパティ定義 */
  message: string;

  /** メソッド定義 */
  countUp();
}

@Component({
  selector: 'app-type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.css']
})
export class TypeScriptComponent extends AbstractComponent implements InterfaceComponent {

  message: string;

  // 初期値を設定する場合は型を省略しても型を自動で判別する
  typeMessage = '';
  count = 1;

  // 共用型で複数指定可能（string または Array<string>）
  unionType: string | Array<string>;

  constructor() {
    super('TypeScript', '入門');

    // (引数): 戻り値型 => { 処理 } でアロー関数
    const appendMessage = (text: string): void => {
      // アロー関数の this は常に自身のオブジェクトを参照する
      this.typeMessage += text;
    }

    // テンプレート文字列
    this.message = `${this.title} ～${this.subTitle}～
テンプレート文字列は変数を埋め込めたり
改行がそのまま扱えたりします`;

    this.body.content = `はじめての ${this.title}`;

    // プリミティブ型は typeof演算子 で判別できる
    if (typeof this.count === 'number') {
      appendMessage('count は number です。');
    }
    if (typeof this.message === 'string') {
      appendMessage('message は string です。');
    }

    // どのコンストラクタから生成されたかは instanceof演算子 で判別できる
    this.unionType = [];
    if (this.unionType instanceof Array) {
      appendMessage('unionType は Array です。');
    }
    if (this.body instanceof BodyContent) {
      appendMessage('body は BodyContent です。');
    }

    // for of 文で値を取り出してループ処理
    this.unionType = ['for ', 'of ', 'loop'];
    for (let value of this.unionType) {
      appendMessage(value);
    }
  }

  // メソッドの戻り値は省略可能（return で返した値の型で自動判別）
  countUp() {
    this.body.content = `${++ this.count}回目の ${this.title}`;
    return this.body.content;
  }
}