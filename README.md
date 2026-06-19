# CASUR Transportes GPS · V2 Robusta

PWA para registrar recorridos operativos de transporte en campo/ingenio, vinculando trayectoria GPS con lotes/fincas CASUR y generando reportes para revisión operativa.

## Objetivo

Registrar recorridos manuales, medir distancia, duración, velocidad aproximada, rumbo, paradas, calidad GPS y referencias de finca/lote, para apoyar el control de costos, tiempos muertos, desvíos y utilización del recurso transporte.

## Qué incluye esta versión

- PWA compatible con GitHub Pages.
- Mapa Leaflet con capa de lotes/fincas desde `data/poligonos_casur.geojson`.
- Recorrido GPS con línea, flechas de rumbo, inicio, fin, paradas y puntos clave.
- Botón manual **Iniciar recorrido** y **Finalizar recorrido**.
- Sin rastreo oculto: solo registra cuando el usuario inicia.
- Autosave de recorrido activo en `localStorage`.
- Recuperación de recorrido activo si se cierra o recarga el navegador.
- Historial local de recorridos finalizados.
- Exportación Excel `.xlsx` con varias pestañas cuando el módulo XLSX está disponible.
- Respaldo `.xls` HTML si no carga el módulo XLSX.
- Reporte HTML imprimible con trayectoria simplificada.
- Texto para WhatsApp.
- Tarjeta PNG resumen.
- Service worker con versión nueva para evitar caché viejo.

## Estructura

```text
CASUR_TRANSPORTES_GPS_V2_ROBUSTA/
├─ index.html
├─ app.js
├─ styles.css
├─ manifest.json
├─ service-worker.js
├─ offline.html
├─ assets/
│  └─ logo_casur.png
├─ icons/
├─ data/
│  ├─ poligonos_casur.geojson
│  └─ metadata.json
├─ docs/
├─ README.md
├─ README_USO_CAMPO.md
└─ CHECKLIST_PRUEBA.md
```

## Instalación en GitHub Pages

1. Subir todo el contenido de la carpeta a un repositorio.
2. Activar GitHub Pages desde `Settings > Pages`.
3. Usar HTTPS.
4. Abrir la URL desde el celular.
5. En Chrome/Android: menú `⋮ > Agregar a pantalla principal`.
6. En iPhone/Safari: botón compartir > `Agregar a pantalla de inicio`.

## Limitación importante de segundo plano

Esta versión es PWA. Puede conservar el recorrido y seguir registrando mientras el navegador lo permita, pero **no garantiza GPS continuo en segundo plano** si el teléfono bloquea pantalla, cambia a otra app, activa ahorro de batería o el sistema suspende el navegador.

La arquitectura queda preparada para una migración posterior a app híbrida con Capacitor/native wrapper, donde sí se puede trabajar con ubicación en segundo plano mediante permisos explícitos y notificación visible.

## Exportación Excel

El botón **Descargar Excel** genera un archivo con nombre automático:

```text
CASUR_Recorrido_[placa/equipo/conductor]_[fecha_hora].xlsx
```

Pestañas incluidas:

1. Resumen Ejecutivo
2. Detalle GPS
3. Paradas
4. Lotes Fincas
5. Control Operativo
6. Eventos
7. Puntos Clave

## Datos locales

Los recorridos se guardan en el navegador del equipo. Si el usuario borra datos del sitio, cambia de navegador o limpia caché/datos locales, puede perder el historial. Por eso se recomienda descargar el Excel al finalizar recorridos importantes.
