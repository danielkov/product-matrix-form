import React, { useState, useCallback } from 'react';
import Form from './Form';
import Step from './Step';
import styled from 'styled-components';

function hasAllValues(arr: any[]): boolean {
  return !arr.includes(undefined) && arr.length === 4;
}

const Button = styled.button`
  display: inline-block;
  padding: 8px 16px;
  margin: 0;
  font-size: 0.94118em;
  font-family: "Avenir Next Rounded",sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.8;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  min-height: 44px;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
  border-radius: 2px;
  background-color: #537ba4;
  color: #fff;
`;

const solutions = [
  [
    `Kisebb súlyod miatt a motor teljesítménye lehet kisebb. A leginkább elterjedt motor
    teljesítmény a 250 wattos. Ennél kisebb teljesítményű elektromos motort nem érdemes
    vásárolnod. A kerékpár stabilitása érdekében a középmotoros változat a legjobb a
    súlyelosztás miatt. Minél nagyobb a wattszám, annál bikább lesz a motor!`,
    `A kerékpárosok többsége 50-80 kg közötti, tesztelések alapján a motor teljesítménye 250-
    500W között a megfelelő. 250W-nál kisebb teljesítményű motort nem érdemes vásárolnod. A
    kerékpár stabilitása érdekében a középmotoros változat a legjobb a súlyelosztás miatt.
    Gondolkodhatsz akár egy 350-500w-osban is, ezzel akár 45-km/h sebességgel is tudsz haladni
    nagyobb megerőltetés nélkül. Minél nagyobb a wattszám, annál bikább lesz a motor.`,
    `80kg feletti súlyod miatt érdemes a nagyobb teljesítményű motorokban gondolkodnod. A
    leginkább elterjedt motor teljesítmény a 250 wattos. Ennél kisebb teljesítményű elektromos
    motort nem érdemes vásárolnod. Minél nagyobb a wattszám, annál bikább lesz a motor. A
    kerékpár stabilitása érdekében a középmotoros változat a legjobb a súlyelosztás miatt.
    Gondolkodhatsz akár egy 500w-osban is, ezzel akár 45-km/h sebességgel is tudsz haladni
    nagyobb megerőltetés nélkül.`
  ],
  [
    `Óriási szerepet játszik az akkumulátor. Fontos hogy az akkumulátor lithiumos (Li-ion) legyen,
    hiszen ezek az akkuk már részlegesen is tölthetőek, nem muszáj megvárni, hogy teljesen
    lemerüljön.Az akkumulátor legfontosabb jellemzője a leadható energia mennyisége, amit Ah-val 
    (Amperóra)jelölünk. Ez a szám minél nagyobb, annál nagyobb távolságot tud megtenni
    egy feltöltéssel. A legjellemzőbb a  10-13 Ah –ás akkumulátorral szerelt elektromos kerékpár
    ami már elegendő 80-100 km megtételére. A napi ingázás általában oda-vissza nem több mint
    80 km, közben a munkahelyen töltheted is, úgyhogy egy 10,5 vagy egy 11,6 Ah-s
    akkumulátor tökéletesen megfelelő.`,
    `Óriási szerepet játszik az akkumulátor. Fontos hogy az akkumulátor lithiumos (Li-ion) legyen,
    hiszen ezek az akkuk már részlegesen is tölthetőek, nem muszáj megvárni, hogy teljesen
    lemerüljön. Az akkumulátor legfontosabb jellemzője a leadható energia mennyisége, amit Ah-
    val  (Amperóra)jelölünk. Ez a szám minél nagyobb, annál nagyobb távolságot tud megtenni
    egy feltöltéssel. A legjellemzőbb a  10-13 Ah –ás akkumulátorral szerelt elektromos kerékpár
    ami már elegendő 80-100 km megtételére.`,
    `Óriási szerepet játszik az akkumulátor. Fontos hogy az akkumulátor lithiumos (Li-ion) legyen,
    hiszen ezek az akkuk már részlegesen is tölthetőek, nem muszáj megvárni, hogy teljesen
    lemerüljön. Az akkumulátor legfontosabb jellemzője a leadható energia mennyisége, amit Ah-
    val  (Amperóra)jelölünk. Ez a szám minél nagyobb, annál nagyobb távolságot tud megtenni
    egy feltöltéssel. A legjellemzőbb a  10-13 Ah –ás akkumulátorral szerelt elektromos kerékpár
    ami már elegendő 80-100 km megtételére de kaphatóak 14,5 és 17,5 Ah-s akkumulátorok is.
    Hosszabb túrákhoz érdemesebb minél nagyobb Ah-s akkumulátort választani!`,
    `Óriási szerepet játszik az akkumulátor. Fontos hogy az akkumulátor lithiumos (Li-ion) legyen,
    hiszen ezek az akkuk már részlegesen is tölthetőek, nem muszáj megvárni, hogy teljesen
    lemerüljön. Az akkumulátor legfontosabb jellemzője a leadható energia mennyisége, amit Ah-
    val  (Amperóra)jelölünk. Ez a szám minél nagyobb, annál nagyobb távolságot tud megtenni
    egy feltöltéssel. A legjellemzőbb a  10-13 Ah –ás akkumulátorral szerelt elektromos kerékpár
    ami már elegendő 80-100 km megtételére, de kaphatóak 14,5 és 17,5 Ah-s akkumulátorok is.`
  ],
  [
    `Sík vagy enyhén lankás terepen a 36V-os motor tökéletesen megfelel! Ezt bátran
    használhatod munkába járáshoz, kisebb távokra, főleg helyi közlekedésre.`,
    `Enyhén lankás vagy dombosabb terepen a 36V-os motor tökéletesen megfelel! Ezt bátran
    használhatod munkába járáshoz, kisebb vagy közepes távokra, helyi közlekedésre, túrázáshoz,
    ideális plusz súly szállítására is.`,
    `Nagyobb túrákhoz, extrém terepen, nagy emelkedőkhöz, terepen a 48V-os motor a megfelelő!
    Ezt bátran használhatod munkába járáshoz, kisebb és hosszabb távokra is, helyi közlekedésre,
    a brutál emelkedőkhöz elengedhetetlen! Nálunk megrendelheted a BAFANG legújabb,
    1000W-os motoregységét, amely képes 48V helyett 52V-os Li-ion akkupakkal is üzemelni
    ami ebből a motorból akár 1700W teljesítményt is képes leadni. FIGYELEM: Ez a típus a
    legerősebb ezért csak nagyon masszív donor kerékpárba építhető be biztonságosan!`
  ],
  [
    `A biztonság nagyon fontos kerékpározás közben! Hatékony fékek kellenek!
    Megnő a kerékpár tömege, és gyorsabban is fogsz menni vele. V fék esetében a csomag tartalmazza az érzékelővel ellátott új fékkarokat, így a fékrendszert cserélni nem kell. Az érzékelős fékrendszer be van kötve a vezérlésbe, így fékezéskor automatikusan leállítja a motort, így biztonságosan tudsz közlekedni!`,
    `A biztonság nagyon fontos kerékpározás közben! Hatékony fékek kellenek!
    Megnő a kerékpár tömege, és gyorsabban is fogsz menni vele.  Tárcsafék esetében a csomag tartalmazza az érzékelővel ellátott új fékkarokat, így a fékrendszert cserélni nem kell. Az érzékelős fékrendszer be van kötve a vezérlésbe, így fékezéskor automatikusan leállítja a motort, így biztonságosan tudsz közlekedni! Viszont szükséged lesz egy kiegészítő elemre. Rendeléskor a konzultáció során erre rá fogunk kérdezni!`,
    `A biztonság nagyon fontos kerékpározás közben! Hatékony fékek kellenek!
    Megnő a kerékpár tömege, és gyorsabban is fogsz menni vele. V fék esetében a csomag tartalmazza az érzékelővel ellátott új fékkarokat, így a fékrendszert cserélni nem kell. Az érzékelős fékrendszer be van kötve a vezérlésbe, így fékezéskor automatikusan leállítja a motort, így biztonságosan tudsz közlekedni! A tárcsafékes kerékpárok jobbak, átépítés ehhez sem kell, egy fék kiegészítővel könnyedén bekötheted a vezérlőbe!`
  ]
];

export default () => {
  const [value, setValue] = useState<any>([, , , ,]);
  const [show, setShow] = useState(false);
  const showResult = useCallback(() => setShow(true), [])
  return (
    <>
      <Form onChange={setValue}>
        <Step index={0} question='Testsúly' options={['50 kg alatt', '50-80 kg között', '80 kg felett']} />
        <Step index={1} question='Felhasználás célja' options={['munkábajárás', 'rövid túrázás (10-50 km)', 'hosszabb túrázás (50 km felett)', 'Vegyes használat']} />
        <Step index={2} question='Felhasználás helyszíne' options={['sík terep', 'dombosabb vidék', 'hegyi bringázás, downhill', 'Vegyes']} />
        <Step index={3} question='Fékrendszer' options={['V fék', 'Tárcsafék', 'kontra', 'még nem tudom']} />
      </Form>
      <Button disabled={!hasAllValues(value)} onClick={showResult}>Eredmény</Button>
      {show && solutions.map((solution, i) => <div key={i}>{solution[value[i]]}</div>)}
    </>
  )
};
