# CASUR Transportes GPS V5.2 · Campo Limpio

PWA operativa para registrar recorridos de transporte en campo/ingenio con GPS, Leaflet, shape de lotes/fincas CASUR, referencias operativas manuales, paradas, historial local, folio robusto, PDF, Excel ejecutivo y WhatsApp.

Esta versión integra las mejores mejoras de **V5.1 Campo** sobre la base **V5 UX Multirecorrido**, pero corrige la pantalla de campo para que no vuelvan a mostrarse indicadores técnicos como conteo de lotes/fincas o autosalvado.

## Novedades V5.2

- **Campo limpio endurecido**: se eliminaron de la vista principal los badges de lotes/fincas y autosalvado. Aunque alguna función interna los actualice, quedan bloqueados visualmente.
- **Wake Lock**: al iniciar recorrido, la app intenta mantener la pantalla encendida mientras está abierta para reducir cortes de GPS.
- **Recuperación automática**: si había un recorrido activo guardado, al reabrir la app se recupera y se intenta reanudar el GPS automáticamente.
- **Seguimiento visual de vehículo**: el mapa sigue la posición durante el recorrido; si el usuario arrastra el mapa, se desactiva el seguimiento hasta volver a tocar ubicación.
- **Aviso HTTPS**: si se abre sin HTTPS, la app advierte que GPS/compartir pueden no funcionar.
- **Service worker network-first** para archivos de app: reduce el riesgo de ver una pantalla vieja por caché.
- Conserva **modo Conductor / modo Supervisor**, historial multirecorrido, folio robusto, PDF/Excel/WhatsApp y referencias operativas.

## Flujo recomendado en campo

1. Abrir la app desde URL HTTPS o instalada como PWA.
2. Tocar **Activar GPS** para ubicarse.
3. Completar conductor, placa/equipo, origen y destino.
4. Tocar **Iniciar recorrido**.
5. Mantener la app abierta cuando se requiera mejor continuidad GPS. La pantalla intentará mantenerse encendida.
6. Al terminar, regresar a la app y tocar **Finalizar recorrido**.
7. Descargar Excel/PDF o compartir resumen.
8. En modo supervisor, revisar historial o exportar consolidado.

## Estructura

```text
index.html
app.js
styles.css
manifest.json
service-worker.js
offline.html
assets/
icons/
data/
  poligonos_casur.geojson
  maestro_fincas.json
  referencias_operativas.json
  metadata.json
docs/
  ARQUITECTURA_HIBRIDA_FUTURA.md
  API_ADMIN_FUTURA.md
```

## Publicación en GitHub Pages

1. Subir todo el contenido de esta carpeta a un repositorio.
2. Activar GitHub Pages.
3. Abrir la URL HTTPS desde celular.
4. Instalar como app desde el navegador.
5. Probar GPS en campo abierto.
6. Si el teléfono sigue mostrando una versión vieja, cerrar la app, limpiar caché del sitio o volver a cargar dos veces. V5.2 usa caché network-first para reducir ese problema.

## Nota sobre segundo plano

Como PWA de navegador, el GPS en segundo plano no se puede garantizar en Android/iPhone. El Wake Lock ayuda manteniendo la pantalla encendida mientras la app está abierta, pero no reemplaza una app híbrida/nativa. Para seguimiento continuo formal con teléfono bloqueado, se recomienda migrar a Capacitor/app híbrida con ubicación en segundo plano y notificación persistente.

## Privacidad operativa

No hay rastreo oculto. El usuario debe activar GPS e iniciar manualmente el recorrido. El registro termina al tocar **Finalizar recorrido**. Los datos quedan localmente hasta exportarse o sincronizarse en una fase futura.
