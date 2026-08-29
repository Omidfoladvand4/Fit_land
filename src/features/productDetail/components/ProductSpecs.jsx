import styled from "styled-components";

const SpecsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid var(--color-neutral-800);
    padding: 12px 16px;
  }
  tr:last-child {
    border: none;
  }

  td {
    padding: 10px 12px;
    font-size: var(--font-body-md);
  }

  td:first-child {
    font-weight: 600;
    width: 30%;
  }

  td:last-child {
  }
`;
function ProductSpecs({ specs }) {
  return (
    <SpecsTable>
      <tbody>
        {specs &&
          Object.entries(specs).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
      </tbody>
    </SpecsTable>
  );
}

export default ProductSpecs;
