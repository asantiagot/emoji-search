import { render } from "@testing-library/react";
import { EmojiBox } from "../EmojiBox/EmojiBox";
import { Emoji } from "../../models";

const props: Emoji[] = [
    {
        "slug": "grinning-face",
        "character": "😀",
        "unicodeName": "grinning face",
        "codePoint": "1F600",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "grinning-face-with-big-eyes",
        "character": "😃",
        "unicodeName": "grinning face with big eyes",
        "codePoint": "1F603",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "grinning-face-with-smiling-eyes",
        "character": "😄",
        "unicodeName": "grinning face with smiling eyes",
        "codePoint": "1F604",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "beaming-face-with-smiling-eyes",
        "character": "😁",
        "unicodeName": "beaming face with smiling eyes",
        "codePoint": "1F601",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "grinning-squinting-face",
        "character": "😆",
        "unicodeName": "grinning squinting face",
        "codePoint": "1F606",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "grinning-face-with-sweat",
        "character": "😅",
        "unicodeName": "grinning face with sweat",
        "codePoint": "1F605",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "rolling-on-the-floor-laughing",
        "character": "🤣",
        "unicodeName": "rolling on the floor laughing",
        "codePoint": "1F923",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "face-with-tears-of-joy",
        "character": "😂",
        "unicodeName": "face with tears of joy",
        "codePoint": "1F602",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "slightly-smiling-face",
        "character": "🙂",
        "unicodeName": "slightly smiling face",
        "codePoint": "1F642",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "upside-down-face",
        "character": "🙃",
        "unicodeName": "upside-down face",
        "codePoint": "1F643",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "winking-face",
        "character": "😉",
        "unicodeName": "winking face",
        "codePoint": "1F609",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "smiling-face-with-smiling-eyes",
        "character": "😊",
        "unicodeName": "smiling face with smiling eyes",
        "codePoint": "1F60A",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "smiling-face-with-halo",
        "character": "😇",
        "unicodeName": "smiling face with halo",
        "codePoint": "1F607",
        "group": "smileys-emotion",
        "subGroup": "face-smiling"
    },
    {
        "slug": "smiling-face-with-hearts",
        "character": "🥰",
        "unicodeName": "smiling face with hearts",
        "codePoint": "1F970",
        "group": "smileys-emotion",
        "subGroup": "face-affection"
    },
    {
        "slug": "smiling-face-with-heart-eyes",
        "character": "😍",
        "unicodeName": "smiling face with heart-eyes",
        "codePoint": "1F60D",
        "group": "smileys-emotion",
        "subGroup": "face-affection"
    },
    {
        "slug": "star-struck",
        "character": "🤩",
        "unicodeName": "star-struck",
        "codePoint": "1F929",
        "group": "smileys-emotion",
        "subGroup": "face-affection"
    },
    {
        "slug": "face-blowing-a-kiss",
        "character": "😘",
        "unicodeName": "face blowing a kiss",
        "codePoint": "1F618",
        "group": "smileys-emotion",
        "subGroup": "face-affection"
    },
    {
        "slug": "kissing-face",
        "character": "😗",
        "unicodeName": "kissing face",
        "codePoint": "1F617",
        "group": "smileys-emotion",
        "subGroup": "face-affection"
    },
    {
        "slug": "smiling-face",
        "character": "☺️",
        "unicodeName": "smiling face",
        "codePoint": "263A FE0F",
        "group": "smileys-emotion",
        "subGroup": "face-affection"
    },
    {
        "slug": "kissing-face-with-closed-eyes",
        "character": "😚",
        "unicodeName": "kissing face with closed eyes",
        "codePoint": "1F61A",
        "group": "smileys-emotion",
        "subGroup": "face-affection"
    },
    {
        "slug": "kissing-face-with-smiling-eyes",
        "character": "😙",
        "unicodeName": "kissing face with smiling eyes",
        "codePoint": "1F619",
        "group": "smileys-emotion",
        "subGroup": "face-affection"
    },
    {
        "slug": "smiling-face-with-tear",
        "character": "🥲",
        "unicodeName": "smiling face with tear",
        "codePoint": "1F972",
        "group": "smileys-emotion",
        "subGroup": "face-affection"
    },
    {
        "slug": "face-savoring-food",
        "character": "😋",
        "unicodeName": "face savoring food",
        "codePoint": "1F60B",
        "group": "smileys-emotion",
        "subGroup": "face-tongue"
    },
    {
        "slug": "face-with-tongue",
        "character": "😛",
        "unicodeName": "face with tongue",
        "codePoint": "1F61B",
        "group": "smileys-emotion",
        "subGroup": "face-tongue"
    },
    {
        "slug": "winking-face-with-tongue",
        "character": "😜",
        "unicodeName": "winking face with tongue",
        "codePoint": "1F61C",
        "group": "smileys-emotion",
        "subGroup": "face-tongue"
    },
    {
        "slug": "zany-face",
        "character": "🤪",
        "unicodeName": "zany face",
        "codePoint": "1F92A",
        "group": "smileys-emotion",
        "subGroup": "face-tongue"
    },
    {
        "slug": "squinting-face-with-tongue",
        "character": "😝",
        "unicodeName": "squinting face with tongue",
        "codePoint": "1F61D",
        "group": "smileys-emotion",
        "subGroup": "face-tongue"
    },
    {
        "slug": "money-mouth-face",
        "character": "🤑",
        "unicodeName": "money-mouth face",
        "codePoint": "1F911",
        "group": "smileys-emotion",
        "subGroup": "face-tongue"
    },
    {
        "slug": "hugging-face",
        "character": "🤗",
        "unicodeName": "hugging face",
        "codePoint": "1F917",
        "group": "smileys-emotion",
        "subGroup": "face-hand"
    },
    {
        "slug": "face-with-hand-over-mouth",
        "character": "🤭",
        "unicodeName": "face with hand over mouth",
        "codePoint": "1F92D",
        "group": "smileys-emotion",
        "subGroup": "face-hand"
    },
    {
        "slug": "shushing-face",
        "character": "🤫",
        "unicodeName": "shushing face",
        "codePoint": "1F92B",
        "group": "smileys-emotion",
        "subGroup": "face-hand"
    },
    {
        "slug": "thinking-face",
        "character": "🤔",
        "unicodeName": "thinking face",
        "codePoint": "1F914",
        "group": "smileys-emotion",
        "subGroup": "face-hand"
    },
    {
        "slug": "zipper-mouth-face",
        "character": "🤐",
        "unicodeName": "zipper-mouth face",
        "codePoint": "1F910",
        "group": "smileys-emotion",
        "subGroup": "face-neutral-skeptical"
    },
    {
        "slug": "face-with-raised-eyebrow",
        "character": "🤨",
        "unicodeName": "face with raised eyebrow",
        "codePoint": "1F928",
        "group": "smileys-emotion",
        "subGroup": "face-neutral-skeptical"
    },
    {
        "slug": "neutral-face",
        "character": "😐",
        "unicodeName": "neutral face",
        "codePoint": "1F610",
        "group": "smileys-emotion",
        "subGroup": "face-neutral-skeptical"
    },
    {
        "slug": "expressionless-face",
        "character": "😑",
        "unicodeName": "expressionless face",
        "codePoint": "1F611",
        "group": "smileys-emotion",
        "subGroup": "face-neutral-skeptical"
    },
    {
        "slug": "face-without-mouth",
        "character": "😶",
        "unicodeName": "face without mouth",
        "codePoint": "1F636",
        "group": "smileys-emotion",
        "subGroup": "face-neutral-skeptical"
    },
    {
        "slug": "smirking-face",
        "character": "😏",
        "unicodeName": "smirking face",
        "codePoint": "1F60F",
        "group": "smileys-emotion",
        "subGroup": "face-neutral-skeptical"
    },
    {
        "slug": "unamused-face",
        "character": "😒",
        "unicodeName": "unamused face",
        "codePoint": "1F612",
        "group": "smileys-emotion",
        "subGroup": "face-neutral-skeptical"
    },
    {
        "slug": "face-with-rolling-eyes",
        "character": "🙄",
        "unicodeName": "face with rolling eyes",
        "codePoint": "1F644",
        "group": "smileys-emotion",
        "subGroup": "face-neutral-skeptical"
    },
    {
        "slug": "grimacing-face",
        "character": "😬",
        "unicodeName": "grimacing face",
        "codePoint": "1F62C",
        "group": "smileys-emotion",
        "subGroup": "face-neutral-skeptical"
    },
    {
        "slug": "lying-face",
        "character": "🤥",
        "unicodeName": "lying face",
        "codePoint": "1F925",
        "group": "smileys-emotion",
        "subGroup": "face-neutral-skeptical"
    },
    {
        "slug": "relieved-face",
        "character": "😌",
        "unicodeName": "relieved face",
        "codePoint": "1F60C",
        "group": "smileys-emotion",
        "subGroup": "face-sleepy"
    },
    {
        "slug": "pensive-face",
        "character": "😔",
        "unicodeName": "pensive face",
        "codePoint": "1F614",
        "group": "smileys-emotion",
        "subGroup": "face-sleepy"
    },
    {
        "slug": "sleepy-face",
        "character": "😪",
        "unicodeName": "sleepy face",
        "codePoint": "1F62A",
        "group": "smileys-emotion",
        "subGroup": "face-sleepy"
    },
    {
        "slug": "drooling-face",
        "character": "🤤",
        "unicodeName": "drooling face",
        "codePoint": "1F924",
        "group": "smileys-emotion",
        "subGroup": "face-sleepy"
    },
    {
        "slug": "sleeping-face",
        "character": "😴",
        "unicodeName": "sleeping face",
        "codePoint": "1F634",
        "group": "smileys-emotion",
        "subGroup": "face-sleepy"
    },
    {
        "slug": "face-with-medical-mask",
        "character": "😷",
        "unicodeName": "face with medical mask",
        "codePoint": "1F637",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "face-with-thermometer",
        "character": "🤒",
        "unicodeName": "face with thermometer",
        "codePoint": "1F912",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "face-with-head-bandage",
        "character": "🤕",
        "unicodeName": "face with head-bandage",
        "codePoint": "1F915",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "nauseated-face",
        "character": "🤢",
        "unicodeName": "nauseated face",
        "codePoint": "1F922",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "face-vomiting",
        "character": "🤮",
        "unicodeName": "face vomiting",
        "codePoint": "1F92E",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "sneezing-face",
        "character": "🤧",
        "unicodeName": "sneezing face",
        "codePoint": "1F927",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "hot-face",
        "character": "🥵",
        "unicodeName": "hot face",
        "codePoint": "1F975",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "cold-face",
        "character": "🥶",
        "unicodeName": "cold face",
        "codePoint": "1F976",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "woozy-face",
        "character": "🥴",
        "unicodeName": "woozy face",
        "codePoint": "1F974",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "dizzy-face",
        "character": "😵",
        "unicodeName": "dizzy face",
        "codePoint": "1F635",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "exploding-head",
        "character": "🤯",
        "unicodeName": "exploding head",
        "codePoint": "1F92F",
        "group": "smileys-emotion",
        "subGroup": "face-unwell"
    },
    {
        "slug": "cowboy-hat-face",
        "character": "🤠",
        "unicodeName": "cowboy hat face",
        "codePoint": "1F920",
        "group": "smileys-emotion",
        "subGroup": "face-hat"
    },
    {
        "slug": "partying-face",
        "character": "🥳",
        "unicodeName": "partying face",
        "codePoint": "1F973",
        "group": "smileys-emotion",
        "subGroup": "face-hat"
    },
    {
        "slug": "disguised-face",
        "character": "🥸",
        "unicodeName": "disguised face",
        "codePoint": "1F978",
        "group": "smileys-emotion",
        "subGroup": "face-hat"
    },
    {
        "slug": "smiling-face-with-sunglasses",
        "character": "😎",
        "unicodeName": "smiling face with sunglasses",
        "codePoint": "1F60E",
        "group": "smileys-emotion",
        "subGroup": "face-glasses"
    },
    {
        "slug": "nerd-face",
        "character": "🤓",
        "unicodeName": "nerd face",
        "codePoint": "1F913",
        "group": "smileys-emotion",
        "subGroup": "face-glasses"
    },
    {
        "slug": "face-with-monocle",
        "character": "🧐",
        "unicodeName": "face with monocle",
        "codePoint": "1F9D0",
        "group": "smileys-emotion",
        "subGroup": "face-glasses"
    },
    {
        "slug": "confused-face",
        "character": "😕",
        "unicodeName": "confused face",
        "codePoint": "1F615",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "worried-face",
        "character": "😟",
        "unicodeName": "worried face",
        "codePoint": "1F61F",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "slightly-frowning-face",
        "character": "🙁",
        "unicodeName": "slightly frowning face",
        "codePoint": "1F641",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "frowning-face",
        "character": "☹️",
        "unicodeName": "frowning face",
        "codePoint": "2639 FE0F",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "face-with-open-mouth",
        "character": "😮",
        "unicodeName": "face with open mouth",
        "codePoint": "1F62E",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "hushed-face",
        "character": "😯",
        "unicodeName": "hushed face",
        "codePoint": "1F62F",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "astonished-face",
        "character": "😲",
        "unicodeName": "astonished face",
        "codePoint": "1F632",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "flushed-face",
        "character": "😳",
        "unicodeName": "flushed face",
        "codePoint": "1F633",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "pleading-face",
        "character": "🥺",
        "unicodeName": "pleading face",
        "codePoint": "1F97A",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "frowning-face-with-open-mouth",
        "character": "😦",
        "unicodeName": "frowning face with open mouth",
        "codePoint": "1F626",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "anguished-face",
        "character": "😧",
        "unicodeName": "anguished face",
        "codePoint": "1F627",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "fearful-face",
        "character": "😨",
        "unicodeName": "fearful face",
        "codePoint": "1F628",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "anxious-face-with-sweat",
        "character": "😰",
        "unicodeName": "anxious face with sweat",
        "codePoint": "1F630",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "sad-but-relieved-face",
        "character": "😥",
        "unicodeName": "sad but relieved face",
        "codePoint": "1F625",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "crying-face",
        "character": "😢",
        "unicodeName": "crying face",
        "codePoint": "1F622",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "loudly-crying-face",
        "character": "😭",
        "unicodeName": "loudly crying face",
        "codePoint": "1F62D",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "face-screaming-in-fear",
        "character": "😱",
        "unicodeName": "face screaming in fear",
        "codePoint": "1F631",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "confounded-face",
        "character": "😖",
        "unicodeName": "confounded face",
        "codePoint": "1F616",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "persevering-face",
        "character": "😣",
        "unicodeName": "persevering face",
        "codePoint": "1F623",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "disappointed-face",
        "character": "😞",
        "unicodeName": "disappointed face",
        "codePoint": "1F61E",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "downcast-face-with-sweat",
        "character": "😓",
        "unicodeName": "downcast face with sweat",
        "codePoint": "1F613",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "weary-face",
        "character": "😩",
        "unicodeName": "weary face",
        "codePoint": "1F629",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "tired-face",
        "character": "😫",
        "unicodeName": "tired face",
        "codePoint": "1F62B",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "yawning-face",
        "character": "🥱",
        "unicodeName": "yawning face",
        "codePoint": "1F971",
        "group": "smileys-emotion",
        "subGroup": "face-concerned"
    },
    {
        "slug": "face-with-steam-from-nose",
        "character": "😤",
        "unicodeName": "face with steam from nose",
        "codePoint": "1F624",
        "group": "smileys-emotion",
        "subGroup": "face-negative"
    },
    {
        "slug": "pouting-face",
        "character": "😡",
        "unicodeName": "pouting face",
        "codePoint": "1F621",
        "group": "smileys-emotion",
        "subGroup": "face-negative"
    },
    {
        "slug": "angry-face",
        "character": "😠",
        "unicodeName": "angry face",
        "codePoint": "1F620",
        "group": "smileys-emotion",
        "subGroup": "face-negative"
    },
    {
        "slug": "face-with-symbols-on-mouth",
        "character": "🤬",
        "unicodeName": "face with symbols on mouth",
        "codePoint": "1F92C",
        "group": "smileys-emotion",
        "subGroup": "face-negative"
    },
    {
        "slug": "smiling-face-with-horns",
        "character": "😈",
        "unicodeName": "smiling face with horns",
        "codePoint": "1F608",
        "group": "smileys-emotion",
        "subGroup": "face-negative"
    },
    {
        "slug": "angry-face-with-horns",
        "character": "👿",
        "unicodeName": "angry face with horns",
        "codePoint": "1F47F",
        "group": "smileys-emotion",
        "subGroup": "face-negative"
    },
    {
        "slug": "skull",
        "character": "💀",
        "unicodeName": "skull",
        "codePoint": "1F480",
        "group": "smileys-emotion",
        "subGroup": "face-negative"
    },
    {
        "slug": "skull-and-crossbones",
        "character": "☠️",
        "unicodeName": "skull and crossbones",
        "codePoint": "2620 FE0F",
        "group": "smileys-emotion",
        "subGroup": "face-negative"
    },
    {
        "slug": "pile-of-poo",
        "character": "💩",
        "unicodeName": "pile of poo",
        "codePoint": "1F4A9",
        "group": "smileys-emotion",
        "subGroup": "face-costume"
    },
    {
        "slug": "clown-face",
        "character": "🤡",
        "unicodeName": "clown face",
        "codePoint": "1F921",
        "group": "smileys-emotion",
        "subGroup": "face-costume"
    },
    {
        "slug": "ogre",
        "character": "👹",
        "unicodeName": "ogre",
        "codePoint": "1F479",
        "group": "smileys-emotion",
        "subGroup": "face-costume"
    },
    {
        "slug": "goblin",
        "character": "👺",
        "unicodeName": "goblin",
        "codePoint": "1F47A",
        "group": "smileys-emotion",
        "subGroup": "face-costume"
    },
    {
        "slug": "ghost",
        "character": "👻",
        "unicodeName": "ghost",
        "codePoint": "1F47B",
        "group": "smileys-emotion",
        "subGroup": "face-costume"
    },
    {
        "slug": "alien",
        "character": "👽",
        "unicodeName": "alien",
        "codePoint": "1F47D",
        "group": "smileys-emotion",
        "subGroup": "face-costume"
    },
    {
        "slug": "alien-monster",
        "character": "👾",
        "unicodeName": "alien monster",
        "codePoint": "1F47E",
        "group": "smileys-emotion",
        "subGroup": "face-costume"
    },
    {
        "slug": "robot",
        "character": "🤖",
        "unicodeName": "robot",
        "codePoint": "1F916",
        "group": "smileys-emotion",
        "subGroup": "face-costume"
    },
    {
        "slug": "grinning-cat",
        "character": "😺",
        "unicodeName": "grinning cat",
        "codePoint": "1F63A",
        "group": "smileys-emotion",
        "subGroup": "cat-face"
    },
    {
        "slug": "grinning-cat-with-smiling-eyes",
        "character": "😸",
        "unicodeName": "grinning cat with smiling eyes",
        "codePoint": "1F638",
        "group": "smileys-emotion",
        "subGroup": "cat-face"
    },
    {
        "slug": "cat-with-tears-of-joy",
        "character": "😹",
        "unicodeName": "cat with tears of joy",
        "codePoint": "1F639",
        "group": "smileys-emotion",
        "subGroup": "cat-face"
    },
    {
        "slug": "smiling-cat-with-heart-eyes",
        "character": "😻",
        "unicodeName": "smiling cat with heart-eyes",
        "codePoint": "1F63B",
        "group": "smileys-emotion",
        "subGroup": "cat-face"
    },
    {
        "slug": "cat-with-wry-smile",
        "character": "😼",
        "unicodeName": "cat with wry smile",
        "codePoint": "1F63C",
        "group": "smileys-emotion",
        "subGroup": "cat-face"
    },
    {
        "slug": "kissing-cat",
        "character": "😽",
        "unicodeName": "kissing cat",
        "codePoint": "1F63D",
        "group": "smileys-emotion",
        "subGroup": "cat-face"
    },
    {
        "slug": "weary-cat",
        "character": "🙀",
        "unicodeName": "weary cat",
        "codePoint": "1F640",
        "group": "smileys-emotion",
        "subGroup": "cat-face"
    },
    {
        "slug": "crying-cat",
        "character": "😿",
        "unicodeName": "crying cat",
        "codePoint": "1F63F",
        "group": "smileys-emotion",
        "subGroup": "cat-face"
    },
    {
        "slug": "pouting-cat",
        "character": "😾",
        "unicodeName": "pouting cat",
        "codePoint": "1F63E",
        "group": "smileys-emotion",
        "subGroup": "cat-face"
    },
    {
        "slug": "see-no-evil-monkey",
        "character": "🙈",
        "unicodeName": "see-no-evil monkey",
        "codePoint": "1F648",
        "group": "smileys-emotion",
        "subGroup": "monkey-face"
    },
    {
        "slug": "hear-no-evil-monkey",
        "character": "🙉",
        "unicodeName": "hear-no-evil monkey",
        "codePoint": "1F649",
        "group": "smileys-emotion",
        "subGroup": "monkey-face"
    },
    {
        "slug": "speak-no-evil-monkey",
        "character": "🙊",
        "unicodeName": "speak-no-evil monkey",
        "codePoint": "1F64A",
        "group": "smileys-emotion",
        "subGroup": "monkey-face"
    },
    {
        "slug": "kiss-mark",
        "character": "💋",
        "unicodeName": "kiss mark",
        "codePoint": "1F48B",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "love-letter",
        "character": "💌",
        "unicodeName": "love letter",
        "codePoint": "1F48C",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "heart-with-arrow",
        "character": "💘",
        "unicodeName": "heart with arrow",
        "codePoint": "1F498",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "heart-with-ribbon",
        "character": "💝",
        "unicodeName": "heart with ribbon",
        "codePoint": "1F49D",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "sparkling-heart",
        "character": "💖",
        "unicodeName": "sparkling heart",
        "codePoint": "1F496",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "growing-heart",
        "character": "💗",
        "unicodeName": "growing heart",
        "codePoint": "1F497",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "beating-heart",
        "character": "💓",
        "unicodeName": "beating heart",
        "codePoint": "1F493",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "revolving-hearts",
        "character": "💞",
        "unicodeName": "revolving hearts",
        "codePoint": "1F49E",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "two-hearts",
        "character": "💕",
        "unicodeName": "two hearts",
        "codePoint": "1F495",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "heart-decoration",
        "character": "💟",
        "unicodeName": "heart decoration",
        "codePoint": "1F49F",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "heart-exclamation",
        "character": "❣️",
        "unicodeName": "heart exclamation",
        "codePoint": "2763 FE0F",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "broken-heart",
        "character": "💔",
        "unicodeName": "broken heart",
        "codePoint": "1F494",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "red-heart",
        "character": "❤️",
        "unicodeName": "red heart",
        "codePoint": "2764 FE0F",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "orange-heart",
        "character": "🧡",
        "unicodeName": "orange heart",
        "codePoint": "1F9E1",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "yellow-heart",
        "character": "💛",
        "unicodeName": "yellow heart",
        "codePoint": "1F49B",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "green-heart",
        "character": "💚",
        "unicodeName": "green heart",
        "codePoint": "1F49A",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "blue-heart",
        "character": "💙",
        "unicodeName": "blue heart",
        "codePoint": "1F499",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "purple-heart",
        "character": "💜",
        "unicodeName": "purple heart",
        "codePoint": "1F49C",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "brown-heart",
        "character": "🤎",
        "unicodeName": "brown heart",
        "codePoint": "1F90E",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "black-heart",
        "character": "🖤",
        "unicodeName": "black heart",
        "codePoint": "1F5A4",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "white-heart",
        "character": "🤍",
        "unicodeName": "white heart",
        "codePoint": "1F90D",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "hundred-points",
        "character": "💯",
        "unicodeName": "hundred points",
        "codePoint": "1F4AF",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "anger-symbol",
        "character": "💢",
        "unicodeName": "anger symbol",
        "codePoint": "1F4A2",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "collision",
        "character": "💥",
        "unicodeName": "collision",
        "codePoint": "1F4A5",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "dizzy",
        "character": "💫",
        "unicodeName": "dizzy",
        "codePoint": "1F4AB",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "sweat-droplets",
        "character": "💦",
        "unicodeName": "sweat droplets",
        "codePoint": "1F4A6",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "dashing-away",
        "character": "💨",
        "unicodeName": "dashing away",
        "codePoint": "1F4A8",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "hole",
        "character": "🕳️",
        "unicodeName": "hole",
        "codePoint": "1F573 FE0F",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "bomb",
        "character": "💣",
        "unicodeName": "bomb",
        "codePoint": "1F4A3",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "speech-balloon",
        "character": "💬",
        "unicodeName": "speech balloon",
        "codePoint": "1F4AC",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "eye-in-speech-bubble",
        "character": "👁️‍🗨️",
        "unicodeName": "eye in speech bubble",
        "codePoint": "1F441 FE0F 200D 1F5E8 FE0F",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "left-speech-bubble",
        "character": "🗨️",
        "unicodeName": "left speech bubble",
        "codePoint": "1F5E8 FE0F",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "right-anger-bubble",
        "character": "🗯️",
        "unicodeName": "right anger bubble",
        "codePoint": "1F5EF FE0F",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "thought-balloon",
        "character": "💭",
        "unicodeName": "thought balloon",
        "codePoint": "1F4AD",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "zzz",
        "character": "💤",
        "unicodeName": "zzz",
        "codePoint": "1F4A4",
        "group": "smileys-emotion",
        "subGroup": "emotion"
    },
    {
        "slug": "waving-hand",
        "character": "👋",
        "unicodeName": "waving hand",
        "codePoint": "1F44B",
        "group": "people-body",
        "subGroup": "hand-fingers-open",
        "variants": [
            {
                "slug": "waving-hand-light-skin-tone",
                "character": "👋🏻"
            },
            {
                "slug": "waving-hand-medium-light-skin-tone",
                "character": "👋🏼"
            },
            {
                "slug": "waving-hand-medium-skin-tone",
                "character": "👋🏽"
            },
            {
                "slug": "waving-hand-medium-dark-skin-tone",
                "character": "👋🏾"
            },
            {
                "slug": "waving-hand-dark-skin-tone",
                "character": "👋🏿"
            },
            {
                "slug": "e1-0-waving-hand-light-skin-tone",
                "character": "👋🏻"
            },
            {
                "slug": "e1-0-waving-hand-medium-light-skin-tone",
                "character": "👋🏼"
            },
            {
                "slug": "e1-0-waving-hand-medium-skin-tone",
                "character": "👋🏽"
            },
            {
                "slug": "e1-0-waving-hand-medium-dark-skin-tone",
                "character": "👋🏾"
            },
            {
                "slug": "e1-0-waving-hand-dark-skin-tone",
                "character": "👋🏿"
            }
        ]
    },
    {
        "slug": "raised-back-of-hand",
        "character": "🤚",
        "unicodeName": "raised back of hand",
        "codePoint": "1F91A",
        "group": "people-body",
        "subGroup": "hand-fingers-open",
        "variants": [
            {
                "slug": "raised-back-of-hand-light-skin-tone",
                "character": "🤚🏻"
            },
            {
                "slug": "raised-back-of-hand-medium-light-skin-tone",
                "character": "🤚🏼"
            },
            {
                "slug": "raised-back-of-hand-medium-skin-tone",
                "character": "🤚🏽"
            },
            {
                "slug": "raised-back-of-hand-medium-dark-skin-tone",
                "character": "🤚🏾"
            },
            {
                "slug": "raised-back-of-hand-dark-skin-tone",
                "character": "🤚🏿"
            },
            {
                "slug": "e3-0-raised-back-of-hand-light-skin-tone",
                "character": "🤚🏻"
            },
            {
                "slug": "e3-0-raised-back-of-hand-medium-light-skin-tone",
                "character": "🤚🏼"
            },
            {
                "slug": "e3-0-raised-back-of-hand-medium-skin-tone",
                "character": "🤚🏽"
            },
            {
                "slug": "e3-0-raised-back-of-hand-medium-dark-skin-tone",
                "character": "🤚🏾"
            },
            {
                "slug": "e3-0-raised-back-of-hand-dark-skin-tone",
                "character": "🤚🏿"
            }
        ]
    },
    {
        "slug": "hand-with-fingers-splayed",
        "character": "🖐️",
        "unicodeName": "hand with fingers splayed",
        "codePoint": "1F590 FE0F",
        "group": "people-body",
        "subGroup": "hand-fingers-open"
    },
    {
        "slug": "hand-with-fingers-splayed-light-skin-tone",
        "character": "🖐🏻",
        "unicodeName": "hand with fingers splayed: light skin tone",
        "codePoint": "1F590 1F3FB",
        "group": "people-body",
        "subGroup": "hand-fingers-open"
    },
    {
        "slug": "hand-with-fingers-splayed-medium-light-skin-tone",
        "character": "🖐🏼",
        "unicodeName": "hand with fingers splayed: medium-light skin tone",
        "codePoint": "1F590 1F3FC",
        "group": "people-body",
        "subGroup": "hand-fingers-open"
    },
    {
        "slug": "hand-with-fingers-splayed-medium-skin-tone",
        "character": "🖐🏽",
        "unicodeName": "hand with fingers splayed: medium skin tone",
        "codePoint": "1F590 1F3FD",
        "group": "people-body",
        "subGroup": "hand-fingers-open"
    },
    {
        "slug": "hand-with-fingers-splayed-medium-dark-skin-tone",
        "character": "🖐🏾",
        "unicodeName": "hand with fingers splayed: medium-dark skin tone",
        "codePoint": "1F590 1F3FE",
        "group": "people-body",
        "subGroup": "hand-fingers-open"
    },
    {
        "slug": "hand-with-fingers-splayed-dark-skin-tone",
        "character": "🖐🏿",
        "unicodeName": "hand with fingers splayed: dark skin tone",
        "codePoint": "1F590 1F3FF",
        "group": "people-body",
        "subGroup": "hand-fingers-open"
    },
    {
        "slug": "raised-hand",
        "character": "✋",
        "unicodeName": "raised hand",
        "codePoint": "270B",
        "group": "people-body",
        "subGroup": "hand-fingers-open",
        "variants": [
            {
                "slug": "raised-hand-light-skin-tone",
                "character": "✋🏻"
            },
            {
                "slug": "raised-hand-medium-light-skin-tone",
                "character": "✋🏼"
            },
            {
                "slug": "raised-hand-medium-skin-tone",
                "character": "✋🏽"
            },
            {
                "slug": "raised-hand-medium-dark-skin-tone",
                "character": "✋🏾"
            },
            {
                "slug": "raised-hand-dark-skin-tone",
                "character": "✋🏿"
            },
            {
                "slug": "e1-0-raised-hand-light-skin-tone",
                "character": "✋🏻"
            },
            {
                "slug": "e1-0-raised-hand-medium-light-skin-tone",
                "character": "✋🏼"
            },
            {
                "slug": "e1-0-raised-hand-medium-skin-tone",
                "character": "✋🏽"
            },
            {
                "slug": "e1-0-raised-hand-medium-dark-skin-tone",
                "character": "✋🏾"
            },
            {
                "slug": "e1-0-raised-hand-dark-skin-tone",
                "character": "✋🏿"
            }
        ]
    },
    {
        "slug": "vulcan-salute",
        "character": "🖖",
        "unicodeName": "vulcan salute",
        "codePoint": "1F596",
        "group": "people-body",
        "subGroup": "hand-fingers-open",
        "variants": [
            {
                "slug": "vulcan-salute-light-skin-tone",
                "character": "🖖🏻"
            },
            {
                "slug": "vulcan-salute-medium-light-skin-tone",
                "character": "🖖🏼"
            },
            {
                "slug": "vulcan-salute-medium-skin-tone",
                "character": "🖖🏽"
            },
            {
                "slug": "vulcan-salute-medium-dark-skin-tone",
                "character": "🖖🏾"
            },
            {
                "slug": "vulcan-salute-dark-skin-tone",
                "character": "🖖🏿"
            },
            {
                "slug": "e1-0-vulcan-salute-light-skin-tone",
                "character": "🖖🏻"
            },
            {
                "slug": "e1-0-vulcan-salute-medium-light-skin-tone",
                "character": "🖖🏼"
            },
            {
                "slug": "e1-0-vulcan-salute-medium-skin-tone",
                "character": "🖖🏽"
            },
            {
                "slug": "e1-0-vulcan-salute-medium-dark-skin-tone",
                "character": "🖖🏾"
            },
            {
                "slug": "e1-0-vulcan-salute-dark-skin-tone",
                "character": "🖖🏿"
            }
        ]
    },
    {
        "slug": "ok-hand",
        "character": "👌",
        "unicodeName": "OK hand",
        "codePoint": "1F44C",
        "group": "people-body",
        "subGroup": "hand-fingers-partial",
        "variants": [
            {
                "slug": "ok-hand-light-skin-tone",
                "character": "👌🏻"
            },
            {
                "slug": "ok-hand-medium-light-skin-tone",
                "character": "👌🏼"
            },
            {
                "slug": "ok-hand-medium-skin-tone",
                "character": "👌🏽"
            },
            {
                "slug": "ok-hand-medium-dark-skin-tone",
                "character": "👌🏾"
            },
            {
                "slug": "ok-hand-dark-skin-tone",
                "character": "👌🏿"
            },
            {
                "slug": "e1-0-ok-hand-light-skin-tone",
                "character": "👌🏻"
            },
            {
                "slug": "e1-0-ok-hand-medium-light-skin-tone",
                "character": "👌🏼"
            },
            {
                "slug": "e1-0-ok-hand-medium-skin-tone",
                "character": "👌🏽"
            },
            {
                "slug": "e1-0-ok-hand-medium-dark-skin-tone",
                "character": "👌🏾"
            },
            {
                "slug": "e1-0-ok-hand-dark-skin-tone",
                "character": "👌🏿"
            }
        ]
    },
    {
        "slug": "pinched-fingers",
        "character": "🤌",
        "unicodeName": "pinched fingers",
        "codePoint": "1F90C",
        "group": "people-body",
        "subGroup": "hand-fingers-partial",
        "variants": [
            {
                "slug": "pinched-fingers-light-skin-tone",
                "character": "🤌🏻"
            },
            {
                "slug": "pinched-fingers-medium-light-skin-tone",
                "character": "🤌🏼"
            },
            {
                "slug": "pinched-fingers-medium-skin-tone",
                "character": "🤌🏽"
            },
            {
                "slug": "pinched-fingers-medium-dark-skin-tone",
                "character": "🤌🏾"
            },
            {
                "slug": "pinched-fingers-dark-skin-tone",
                "character": "🤌🏿"
            },
            {
                "slug": "e13-0-pinched-fingers-light-skin-tone",
                "character": "🤌🏻"
            },
            {
                "slug": "e13-0-pinched-fingers-medium-light-skin-tone",
                "character": "🤌🏼"
            },
            {
                "slug": "e13-0-pinched-fingers-medium-skin-tone",
                "character": "🤌🏽"
            },
            {
                "slug": "e13-0-pinched-fingers-medium-dark-skin-tone",
                "character": "🤌🏾"
            },
            {
                "slug": "e13-0-pinched-fingers-dark-skin-tone",
                "character": "🤌🏿"
            }
        ]
    },
];

describe(`EmojiBox Test Suite`, () => {
    it('should render EmojiBox', () => {
        const { baseElement } = render(<EmojiBox />);
        expect(baseElement).toBeDefined();
    });

    it('renders an html table', () => {
        const { getByTestId  } = render(<EmojiBox />);
        const elemByTestId = getByTestId('emoji-box-table');
        expect(elemByTestId.getElementsByTagName('html'));
        expect(getByTestId('emoji-box-table')).toBeDefined();
    });

    it('should have 10 td based on props', () => {
        const { getAllByTestId } = render(<EmojiBox />);
        expect(getAllByTestId('emoji-box-table-td')).toHaveLength(10);
    });
});