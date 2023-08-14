import { NavLink, useNavigation, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Photos() {
  const { photos } = useLoaderData();
  const { albumId } = useParams();
  const { state } = useNavigation();

  const currentAlbum = photos.find((album) => album.id === parseInt(albumId));

  if (state === "loading") {
    return <p> LOADING </p>;
  }

  return (
    <div>
      <table>
        <thead>
          {currentAlbum && (
            <tr>
              <th scope="col">Album Title</th>
              <th scope="col">Album Description (if any)</th>
            </tr>
          )}
        </thead>
        <tbody>
          {currentAlbum && (
            <tr>
              <td>{currentAlbum.title}</td>
              <td>{currentAlbum.id}</td>
              <td>
                <NavLink className="button-denied" to="/">
                  ПОВЕРНУТИСЯ
                </NavLink>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th scope="col">Thumbnail</th>
            <th scope="col">Photo Title</th>
            <th scope="col">Photo ID</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <td>
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </td>
              <td>{photo.title}</td>
              <td>{photo.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <NavLink className="button-denied" to="/">
        ПОВЕРНУТИСЯ
      </NavLink>
    </div>
  );
}
