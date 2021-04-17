export interface Emoji {
    slug: string;
    character: string;
    unicodeName?: string;
    codePoint?: string;
    group?: string;
    subGroup?: string;
    variants?: Emoji[];
}