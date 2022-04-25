import React from "react";

export default function SongArtist({ artist }) {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGender} - {artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        Sitio Web Oficial
      </a>
      <p style={{ whiteSpace: "pre-wrap" }}>{artist.strBiographyEN}</p>
    </section>
  );
}
