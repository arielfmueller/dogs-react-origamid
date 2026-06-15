import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import Error from "../Helper/Error";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Loading from "../Helper/Loading";
import styles from "../../Styles/Components/Feed/FeedPhotos.module.css";

const FeedPhotos = ({ status, setModalPhoto, user, page, setInfinite }) => {
  const { data, loading, error, request, setData } = useFetch();
  const firstRender = React.useRef(true);
  const total = 6;

  React.useEffect(() => {
    async function fetchPhotos(params) {

      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false)
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (status !== null) return

    async function updateViews() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const response = await fetch(url, options);
      const json = await response.json();

      if (json) {
        setData((prev) => {
          return prev.map((currentPhoto) => {
            let updatedPhoto = null;
            for (let i = 0; i < json.length; i++) {
              if (json[i].id === currentPhoto.id) {
                updatedPhoto = json[i];
                break;
              }
            }
            return updatedPhoto
              ? { ...currentPhoto, acessos: updatedPhoto.acessos }
              : currentPhoto;
          });
        });
      }
    }
    updateViews()
  }, [status])

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
