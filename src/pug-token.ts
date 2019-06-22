export interface Loc {
	start: { line: number; column: number };
	end: { line: number; column: number };
}

export interface TagToken {
	type: 'tag';
	loc: Loc;
	val: string;
}

export interface StartAttributesToken {
	type: 'start-attributes';
	loc: Loc;
}

export interface Attribute {
	type: 'attribute';
	loc: Loc;
	name: string;
	val: string;
	mustEscape: boolean;
}

export interface EndAttributesToken {
	type: 'end-attributes';
	loc: Loc;
}

export interface IndentToken {
	type: 'indent';
	loc: Loc;
	val: number;
}

export interface ClassToken {
	type: 'class';
	loc: Loc;
	val: string;
}

export interface OutdentToken {
	type: 'outdent';
	loc: Loc;
}

export interface EosToken {
	type: 'eos';
	loc: Loc;
}

export interface CommentToken {
	type: 'comment';
	loc: Loc;
	val: string;
	buffer: boolean;
}

export interface NewlineToken {
	type: 'newline';
	loc: Loc;
}

export interface TextToken {
	type: 'text';
	loc: Loc;
	val: string;
}

export interface InterpolatedCodeToken {
	type: 'interpolated-code';
	loc: Loc;
	mustEscape: boolean;
	buffer: boolean;
	val: string;
}

export type Token =
	| TagToken
	| StartAttributesToken
	| Attribute
	| EndAttributesToken
	| IndentToken
	| ClassToken
	| OutdentToken
	| EosToken
	| CommentToken
	| NewlineToken
	| TextToken
	| InterpolatedCodeToken;
