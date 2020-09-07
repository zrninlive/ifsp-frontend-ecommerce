import styled from 'styled-components';

export const Container = styled.form`
  padding: 15px;
  /* background: #fff; */
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: baseline;

  button {
    margin: 50px auto 0px;
  }
`;

export const Orders = styled.div`
  padding: 15px;
  /* background: #fff; */
  border-radius: 4px;

  .accordion__button {
    display: flex;
    justify-content: space-between;
    font-weight: bold;

    color: #000;

    span {
      color: #7159c1;
    }
  }

  .accordion__panel {
    background: #fff;

    table {
      width: 100%;
      text-align: center;

      tr {
        height: 50px;
      }
    }
  }
`;

export const OrderIsEmpty = styled.div`
  h1 {
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
  }
`;
