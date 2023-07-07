import React, { useState, useEffect, useRef } from "react";
import TrimbleMaps from "@trimblemaps/trimblemaps-js";
import MapMenus from "@trimblemaps/trimblemaps-mapmenus";
import { TRIMBLE_API_KEY } from "@/constants/trimble";

const TrimbleMap = React.forwardRef(({ className, start, end }) => {
  const [location, setLocation] = useState();
  const mapContainerRef = useRef(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);
  useEffect(() => {
    TrimbleMaps.APIKey = TRIMBLE_API_KEY;
    const myMap = new TrimbleMaps.Map({
      container: mapContainerRef.current,
      center: new TrimbleMaps.LngLat(-96, 35),
      zoom: 9,
    });
    const myRoute = new TrimbleMaps.Route({
      routeId: "myRoute",
      stops: [
        new TrimbleMaps.LngLat(start?.origin_longitude, start?.origin_latitude),
        // new TrimbleMaps.LngLat(-74.528542, 40.38668), //stop coordinate
        new TrimbleMaps.LngLat(end?.destination_longitude, end?.destination_latitude),
      ],
    });

    const ctrl = new MapMenus({});
    myMap.addControl(ctrl, "top-left");
    myMap.on("load", function () {
      myRoute.addTo(myMap);
      myMap.addLayer({
        id: "point",
        source: "point",
        type: "symbol",
        layout: {
          "icon-image": "truck-fill-black",
          "icon-size": 1.5,
          "icon-allow-overlap": true,
          "icon-keep-upright": true,
        },
      });
<<<<<<< HEAD
      //   myMap.setWeatherRadarVisibility(true);
      //     myMap.set3dBuildingVisibility(true);
      //   myMap.setTrafficVisibility(true);
      //   myMap.setPlacesVisibility(true);
      //   myMap.setPOIVisibility(true);
      //   trafficIncident.addTo(myMap);
      //   truckRestriction.addTo(myMap);
      // Customize your map once loaded
    });
  }, []);

  return (
    <>
      <div ref={mapContainerRef} className={className}></div>
    </>
  );
});
=======

      const ctrl = new MapMenus({});

      var point = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              name: "Marlen`s Order to Miami", //order properties
            },
            geometry: {
              type: "Point",
              coordinates: [-74.5455, 40.38668], //truck position
            },
          },
        ],
      };
      myMap.addControl(ctrl, "top-left");
      myMap.on("load", function () {
        myRoute.addTo(myMap);
        myMap.addSource("point", {
          type: "geojson",
          data: point,
        });
        myMap.addLayer({
          id: "point",
          source: "point",
          type: "symbol",
          layout: {
            "icon-image": "truck-fill-black",
            "icon-size": 1.5,
            "icon-allow-overlap": true,
            "icon-keep-upright": true,
          },
        });
        // // Listen for clicks on the point layer
        myMap.on("click", "point", function (evt) {
          const popupLocation = evt.features[0].geometry.coordinates.slice();
          const popupContent = evt.features[0].properties.name;
          new TrimbleMaps.Popup()
            .setLngLat(popupLocation)
            .setHTML(popupContent)
            .addTo(myMap);
        });
        // Change cursor when hovering over a feature on the points layer
        myMap.on("mouseenter", "point", function () {
          myMap.getCanvas().style.cursor = "pointer";
        });
        // Change cursor back
        myMap.on("mouseleave", "point", function () {
          myMap.getCanvas().style.cursor = "";
        });
        //   myMap.setWeatherRadarVisibility(true);
        // myMap.set3dBuildingVisibility(true);
        //   myMap.setTrafficVisibility(true);
        //   myMap.setPlacesVisibility(true);
        //   myMap.setPOIVisibility(true);
        //   trafficIncident.addTo(myMap);
        //   truckRestriction.addTo(myMap);
        // Customize your map once loaded
      });
    }, []);

    return (
      <div>
        <div ref={mapContainerRef} className={className}></div>
      </div>
    );
  }
);
>>>>>>> main
export default TrimbleMap;
