import styled from 'styled-components';

export const FormContainer = styled.form`
    background: var(--black);
    color: var(--white);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-direction: column;
`;

export const TextField = styled.input`
    width: 100%;
    height: 40px;
    margin-top: 50px;
`;

export const Label = styled.label`
  font-size: 16px;
`;