import { Link, useParams } from "react-router-dom";
import { Container, Button, Spinner, Table } from "reactstrap";
import { useGetSongQuery } from "../slices/songsApiSlice";

export default function Song() {
  const { id } = useParams();
  const { data, isError, isLoading, error, isSuccess } = useGetSongQuery({
    songId: id,
  });

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
        <h3>Song Details:</h3>
        <Table>
          <tbody>
            <tr>
              <th scope="row">Id:</th>
              <td>{data.id}</td>
            </tr>
            <tr>
              <th scope="row">Title:</th>
              <td>{data.title}</td>
            </tr>
            <tr>
              <th scope="row">Genre:</th>
              <td>{data.genre}</td>
            </tr>
            <tr>
              <th scope="row">Duration:</th>
              <td>{data.duration}</td>
            </tr>
            <tr>
              <th scope="row">Main Artist:</th>
              <td>{data.artist.name}</td>
            </tr>
            <tr>
              <th scope="row">Audio Language:</th>
              <td>{data.audioLanguage}</td>
            </tr>
          </tbody>
        </Table>
        <Link to="/songs">
          <Button>Back to Songs</Button>
        </Link>
      </Container>
    );
  }

  return null;
}
