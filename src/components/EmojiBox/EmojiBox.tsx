import styled from 'styled-components';

const Table = styled.table`
    font-size: large;
`;

export const EmojiBox: React.FC = () => {
    return (
        <Table data-testid="emoji-box-table" />
    );
};