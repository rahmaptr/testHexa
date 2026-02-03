<script lang="ts">
    import {
        MapLibre,
        GeoJSON,
        FillLayer,
        hoverStateFilter,
        LineLayer,
    } from "svelte-maplibre";
    import type { ExpressionSpecification, LngLatBoundsLike } from "maplibre-gl";
    import type { PageProps } from "./$types";
    import { contrastingColor } from "$lib";

    let bounds: LngLatBoundsLike = $state([-400, -74, 463, 85]);
    let displayBounds = $derived(bounds.map((b) => b.toFixed(4)).join(", "));
    let { data }: PageProps = $props();

    let showBorder = $state(true);
    let showFill = $state(true);
    let fillColor = $state("#006600");
    let borderColor = $state("#003300");

    let map: maplibregl.Map | undefined = $state();
    let loaded = $state(false);
    let textLayers: maplibregl.LayerSpecification[] = $derived(
        map && loaded
            ? map.getStyle().layers.filter((layer: maplibregl.LayerSpecification) => {
                  return (
                      layer.type === "symbol" &&
                      layer["source-layer"] === "place"
                  );
              })
            : [],
    );

    let colors = $derived(contrastingColor(fillColor));
    $effect(() => {
        for (let layer of textLayers) {
            map?.setPaintProperty(layer.id, "text-color", colors.textColor);
            map?.setPaintProperty(
                layer.id,
                "text-halo-color",
                colors.textOutlineColor,
            );
        }
    });

    let filterStates = $state(false);
    let filter: ExpressionSpecification | undefined = $derived(
        filterStates
            ? ["==", "T", ["slice", ["get", "NAME"], 0, 1]]
            : undefined,
    );
</script>

<div class="flex flex-col justify-center items-center">
    <h1 class="text-lg">World View</h1>
    <p class="tabular-nums pb-5">Bounds: {displayBounds}</p>
    <MapLibre
        style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        class="relative aspect-[9/16] h-[60vh] w-[80vw]"
        standardControls
        bind:bounds
        bind:map
        bind:loaded
    >
        <GeoJSON data={data.data}>
            {#if showFill}
                <FillLayer
                    paint={{
                        "fill-color": hoverStateFilter(
                            fillColor,
                            colors.hoverBgColor,
                        ),
                        "fill-opacity": 0.5,
                    }}
                    {filter}
                    beforeLayerType="symbol"
                    manageHoverState
                />
            {/if}
            {#if showBorder}
                <LineLayer
                    layout={{ "line-cap": "round", "line-join": "round" }}
                    paint={{ "line-color": borderColor, "line-width": 3 }}
                    beforeLayerType="symbol"
                />
            {/if}
        </GeoJSON>
    </MapLibre>
</div>
