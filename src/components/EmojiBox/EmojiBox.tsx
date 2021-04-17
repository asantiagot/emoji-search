import styled from 'styled-components';
import { Emoji } from '../../models';

export interface EmojiBoxProps {
    emojis: Emoji[];
}

interface TdProps {
    index: number;
}

const Table = styled.table`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    /* grid-auto-rows: minmax(100px, auto); */
`;

const TableBody = styled.tbody`
    display: grid;
`;

const Td = styled.td<TdProps>`
    grid-column: ${({ index }) => index % 10 + 1};
`;

const Searchbar = styled.input`
`;

export const EmojiBox: React.FC<EmojiBoxProps> = ({ emojis }) => {
    return (
        <Table data-testid="emoji-box-table">
            <thead>
                <Searchbar />
            </thead>
            <TableBody>
                {emojis && emojis.map((emoji: Emoji, index: number) => <Td key={index} index={index}>{emoji.character}</Td>)}
            </TableBody>
        </Table>
    );
};