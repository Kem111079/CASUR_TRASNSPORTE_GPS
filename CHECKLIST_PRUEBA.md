# Checklist de prueba · CASUR Transportes GPS V2 Robusta

## 1. Carga inicial

- [ ] La app abre en GitHub Pages con HTTPS.
- [ ] No se queda pegada en “Cargando”.
- [ ] Se muestra mapa satelital.
- [ ] Carga capa de lotes/fincas.
- [ ] Botón Instalar aparece cuando el navegador lo permite.

## 2. GPS

- [ ] Al tocar Iniciar recorrido solicita permiso de ubicación.
- [ ] Muestra GPS activo.
- [ ] Muestra precisión GPS.
- [ ] Muestra velocidad aproximada.
- [ ] Muestra rumbo.
- [ ] Permite reiniciar GPS.
- [ ] Permite finalizar aunque la señal sea mala.

## 3. Recorrido

- [ ] Dibuja línea del recorrido.
- [ ] Muestra flechas de rumbo.
- [ ] Marca inicio.
- [ ] Marca fin.
- [ ] Acumula distancia razonable.
- [ ] Acumula duración en tiempo real.
- [ ] No duplica demasiados puntos estando detenido.

## 4. Lotes / fincas

- [ ] El punto actual muestra finca/lote si cae dentro del shape.
- [ ] El Excel incluye finca/lote por punto GPS.
- [ ] El resumen incluye lotes/fincas recorridas.
- [ ] El botón Lotes oculta y muestra la capa.

## 5. Paradas

- [ ] Detecta parada después del umbral configurado.
- [ ] Muestra paradas en mapa.
- [ ] Excel incluye tabla de paradas.
- [ ] Resumen muestra tiempo detenido.

## 6. Persistencia

- [ ] Al recargar la página recupera recorrido activo.
- [ ] Al volver a la app después de cambiar de aplicación no pierde los puntos anteriores.
- [ ] Si hubo pausa larga, aparece evento de posible pausa/segundo plano.
- [ ] Al finalizar queda en historial local.
- [ ] Permite borrar historial local.

## 7. Exportaciones

- [ ] Descarga Excel con nombre fechado.
- [ ] Excel abre en Windows.
- [ ] Excel contiene pestañas: Resumen Ejecutivo, Detalle GPS, Paradas, Lotes Fincas, Control Operativo, Eventos, Puntos Clave.
- [ ] Reporte HTML abre e imprime.
- [ ] WhatsApp genera texto correcto.
- [ ] Imagen resumen se descarga como PNG.

## 8. Prueba de campo recomendada

- [ ] Prueba 1: recorrido corto 5–10 minutos con pantalla encendida.
- [ ] Prueba 2: abrir WhatsApp 2–3 minutos y volver.
- [ ] Prueba 3: bloquear pantalla 2–3 minutos y volver.
- [ ] Prueba 4: finalizar y comparar distancia contra odómetro/referencia.
- [ ] Prueba 5: descargar Excel y validar puntos/lotes/paradas.

## 9. Observaciones para futura app híbrida

- [ ] Documentar teléfonos donde la PWA pausó GPS.
- [ ] Documentar comportamiento en Android vs iPhone.
- [ ] Identificar necesidad real de segundo plano continuo.
- [ ] Preparar migración a Capacitor/native wrapper con notificación persistente y permisos explícitos.
