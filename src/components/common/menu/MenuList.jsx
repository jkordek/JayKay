import React from 'react';
import MenuItem from './MenuItem';

const MenuList = () => (
  <div className="menuList">
    <MenuItem label="Aktualności" />
    <MenuItem label="Dane o placówkach" />
    <MenuItem label="Dokumenty" />
    <MenuItem label="Forum" />
    <MenuItem label="Kalendarz" />
    <MenuItem label="Finanse" />
    <MenuItem label="Raporty" />
  </div>
);

export default MenuList;
