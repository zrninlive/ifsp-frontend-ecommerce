import styled from 'styled-components';

export const Container = styled.form`
  padding: 30px;
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
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  .accordion__button {
    display: flex;
    justify-content: space-between;

    color: #000;

    span {
      font-weight: bold;
      color: #7159c1;
    }
  }

  .accordion__panel {
    table {
      width: 100%;
      text-align: center;

      tr {
        height: 50px;
      }
    }
  }
`;
