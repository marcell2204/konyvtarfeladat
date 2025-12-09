-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3307
-- Létrehozás ideje: 2025. Dec 09. 08:28
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `konyvtaros`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kolcsonzesek`
--

CREATE TABLE `kolcsonzesek` (
  `kolcsonzes_id` int(11) NOT NULL,
  `peldany_id` int(11) NOT NULL,
  `olvaso_id` int(11) NOT NULL,
  `konyvtaros_id` int(11) DEFAULT NULL,
  `kolcsonzes_datuma` timestamp NOT NULL DEFAULT current_timestamp(),
  `lejarat` date NOT NULL,
  `visszahozva` timestamp NULL DEFAULT NULL,
  `megjegyzes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `konyvek`
--

CREATE TABLE `konyvek` (
  `konyv_id` int(11) NOT NULL,
  `cim` varchar(500) NOT NULL,
  `alcim` varchar(500) DEFAULT NULL,
  `isbn` varchar(20) DEFAULT NULL,
  `kiado_id` int(11) DEFAULT NULL,
  `leiras` text DEFAULT NULL,
  `letrehozva` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `konyvtarosok`
--

CREATE TABLE `konyvtarosok` (
  `konyvtaros_id` int(11) NOT NULL,
  `felhasznalonev` varchar(100) NOT NULL,
  `teljes_nev` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `olvasok`
--

CREATE TABLE `olvasok` (
  `olvaso_id` int(11) NOT NULL,
  `kartyaszam` varchar(50) DEFAULT NULL,
  `vezeteknev` varchar(150) NOT NULL,
  `keresztnev` varchar(100) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telefon` varchar(50) DEFAULT NULL,
  `osztaly` varchar(50) DEFAULT NULL,
  `regisztralt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `kolcsonzesek`
--
ALTER TABLE `kolcsonzesek`
  ADD PRIMARY KEY (`kolcsonzes_id`),
  ADD KEY `peldany_id` (`peldany_id`),
  ADD KEY `olvaso_id` (`olvaso_id`),
  ADD KEY `konyvtaros_id` (`konyvtaros_id`);

--
-- A tábla indexei `konyvek`
--
ALTER TABLE `konyvek`
  ADD PRIMARY KEY (`konyv_id`);

--
-- A tábla indexei `konyvtarosok`
--
ALTER TABLE `konyvtarosok`
  ADD PRIMARY KEY (`konyvtaros_id`),
  ADD UNIQUE KEY `felhasznalonev` (`felhasznalonev`);

--
-- A tábla indexei `olvasok`
--
ALTER TABLE `olvasok`
  ADD PRIMARY KEY (`olvaso_id`),
  ADD UNIQUE KEY `kartyaszam` (`kartyaszam`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `kolcsonzesek`
--
ALTER TABLE `kolcsonzesek`
  MODIFY `kolcsonzes_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `konyvek`
--
ALTER TABLE `konyvek`
  MODIFY `konyv_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `konyvtarosok`
--
ALTER TABLE `konyvtarosok`
  MODIFY `konyvtaros_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `olvasok`
--
ALTER TABLE `olvasok`
  MODIFY `olvaso_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `kolcsonzesek`
--
ALTER TABLE `kolcsonzesek`
  ADD CONSTRAINT `kolcsonzesek_ibfk_1` FOREIGN KEY (`peldany_id`) REFERENCES `konyvek` (`konyv_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `kolcsonzesek_ibfk_2` FOREIGN KEY (`olvaso_id`) REFERENCES `olvasok` (`olvaso_id`),
  ADD CONSTRAINT `kolcsonzesek_ibfk_3` FOREIGN KEY (`konyvtaros_id`) REFERENCES `konyvtarosok` (`konyvtaros_id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
