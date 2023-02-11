import React from "react";
import MapView, {Marker} from "react-native-maps";

export default function MapViewComponent({ dados, setIsOpen, addList }) {
  return (
    <MapView
      mapType={"satelliteFlyover"}
      scrollEnabled={true}
      rotateEnabled={false}
      scrollDuringRotateOrZoomEnabled={true}
      userInterfaceStyle="dark"
      style={{flex: 1}}
      setIsOpen={setIsOpen}
    >
      {dados.map(({ properties }) => {
        return (
          <Marker
            key={Math.random().toString()}
            coordinate={{
              latitude: properties.latitude,
              longitude: properties.longitude,
            }}
              onPress={() => {
              {setIsOpen(true)}{
              addList(
                properties.municipio,
                properties.estado,
                properties.pais,
                properties.datahora,
                properties.satelite,
                properties.bioma,
                properties.frp
              )}
            }}
          />
        );
      })}
    </MapView>
  );
}