import { Container, Spinner } from "reactstrap";
import SongsTable from "../components/SongsTable";
import { useGetAllSongsQuery } from "../slices/songsApiSlice";

export default function Songs() {
  const { data, isError, isLoading, error, isSuccess } = useGetAllSongsQuery();

  if (isLoading) {
    return (
      <Container>
        <Spinner>Loading...</Spinner>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <p>Error: {JSON.stringify(error)}</p>
      </Container>
    );
  }

  if (isSuccess) {
    return (
      <Container>
        <SongsTable data={data} />
      </Container>
    );
  }

  return null;
}
