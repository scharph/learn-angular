## property vs signal property

## Die normale Property (const x = 12)
Bei herkömmlichen Variablen ist Angular "blind" für Änderungen am Wert selbst.

Reaktivität: Angular nutzt standardmäßig Zone.js, um das gesamte Komponenten-Diagramm bei jedem Event (Klick, HTTP-Request, Timer) von oben nach unten zu prüfen (Change Detection).

Prüfung: Angular vergleicht den alten Wert mit dem neuen Wert. Wenn du this.x = 13 setzt, bemerkt Angular das erst beim nächsten globalen Durchlauf.

Performance: Bei großen Apps führt dies zu vielen unnötigen Prüfungen, auch wenn sich in einer Komponente gar nichts geändert hat.

## Das Signal (const x = signal(12))
Ein Signal ist ein "beobachtbarer" Container für einen Wert. Es informiert Angular aktiv, wenn sich etwas ändert.

Reaktivität: Signale sind granular. Angular weiß exakt, an welcher Stelle im Template der Wert x verwendet wird.

Push-Modell: Wenn du x.set(13) aufrufst, "benachrichtigt" das Signal die betroffenen Stellen im UI direkt.

Performance: Angular muss nicht mehr den gesamten Komponentenbaum absuchen. Das ermöglicht eine extrem effiziente Change Detection (Stichwort: Zoneless Angular).