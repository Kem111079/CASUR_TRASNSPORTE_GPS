# Guía rápida para presentar CASUR Transportes GPS

## Objetivo de la demo

Mostrar que la app puede registrar un recorrido operativo de transporte, ubicarlo sobre fincas/lotes/referencias, detectar paradas y generar respaldos en Excel/PDF.

## Enlace para presentar

Abrir:

`simulador.html`

Si no redirecciona, abrir:

`index.html?demo=1`

## Secuencia sugerida para 5 minutos

1. Explicar que el botón **Demo guiada** simula puntos GPS sin usar ubicación real.
2. Presionar **Demo guiada** y mostrar:
   - mapa;
   - ruta en amarillo/verde;
   - flechas de rumbo;
   - ubicación actual por finca/lote o carretera.
3. Mostrar que la bitácora indica distancia, duración, velocidad y paradas.
4. Presionar **Generar demo** si se necesita llegar rápido al resultado final.
5. Cambiar a **Modo Supervisor** para enseñar historial y acciones.
6. Descargar **Excel recorrido** y **PDF del recorrido**.
7. Cerrar con el mensaje: “La PWA sirve para probar el flujo y generar evidencia; para seguimiento continuo en segundo plano se recomienda la futura app híbrida”.

## Mensaje ejecutivo recomendado

CASUR Transportes GPS busca convertir cada viaje en una bitácora operativa: quién condujo, qué equipo usó, de dónde salió, hacia dónde fue, cuánto recorrió, cuánto tiempo estuvo detenido, por qué zonas pasó y qué respaldo queda para control de costos.

## Limitación importante

La PWA no garantiza GPS en segundo plano. El simulador es solo para presentación. Para operación completa con el teléfono libremente, la siguiente etapa debe ser app híbrida/nativa con permisos claros, visibles y sin rastreo oculto.


Versión recomendada para este repositorio: abrir `index.html` y usar **Iniciar simulación** para arrancar el recorrido demo automáticamente. También puede abrir `app.html?demo=1` para ver el panel del simulador sin autoarranque.


## Actualización V2 · UI + Reporte Ejecutivo

Esta versión del simulador agrega:
- Bitácora móvil tipo bottom sheet de 3 niveles: mini, media y completa.
- Mayor espacio visual para el mapa durante la simulación.
- Reporte HTML/PDF más ejecutivo: mapa operativo con fondo vectorial, ruta, dirección, inicio, fin y paradas.
- Compactación de lugares por tramos para que viajes largos no generen reportes excesivos.
- Excel conserva detalle completo y agrega hoja `Tramos` para revisión rápida.

Uso recomendado en presentación:
1. Abrir `index.html`.
2. Tocar **Iniciar simulación**.
3. Esperar que finalice el ciclo o usar generación instantánea desde el panel.
4. Mostrar PDF/Excel como evidencia del recorrido.
