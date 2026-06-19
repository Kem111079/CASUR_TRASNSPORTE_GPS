# Arquitectura futura · Modo Transporte Pro

Esta PWA V2 queda preparada conceptualmente para migrar a app híbrida/nativa sin rehacer el proyecto.

## Por qué migrar

Una PWA en navegador no puede garantizar GPS continuo cuando el usuario bloquea pantalla, abre otra aplicación o el sistema suspende el navegador. Para seguimiento continuo de transporte, se necesita una app con permiso de ubicación en segundo plano y notificación visible.

## Enfoque recomendado

1. Mantener `index.html`, `styles.css` y parte de la lógica visual.
2. Separar en la siguiente fase un módulo `gps-provider.js`:
   - `WebGpsProvider` para PWA.
   - `NativeGpsProvider` para Capacitor.
3. Separar persistencia en `storage-provider.js`:
   - localStorage/IndexedDB en PWA.
   - SQLite/Filesystem en app híbrida si se requiere.
4. En app híbrida usar permiso explícito de ubicación en segundo plano.
5. Mostrar notificación persistente:
   - “CASUR Transportes GPS registrando recorrido”.
6. No iniciar seguimiento automáticamente sin acción del usuario.
7. Mantener botón claro para finalizar recorrido.

## Principio de privacidad

La migración no debe convertirse en rastreo oculto. El usuario debe iniciar y detener manualmente, y la app debe indicar claramente que el GPS está activo.
