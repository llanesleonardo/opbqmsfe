import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SystemContext } from "../../Context/systemContext";
import PulseLoader from "react-spinners/PulseLoader";
export default function MainMenuApp() {
  const { systemValues, getSystemValues, loading } = useContext(SystemContext);
  const [activeSubMenus, setActiveSubMenus] = useState({});

  const setSystemValues = async () => {
    await getSystemValues();
  };
  useEffect(() => {
    setSystemValues();
  }, []);

  const toggleSubMenu = (index) => {
    setActiveSubMenus((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <ul>
      {systemValues ? (
        systemValues.map((menuItem, index) => {
          return (
            <li
              key={index}
              className="flex flex-row justify-start items-center py-3"
            >
              <div className="flex flex-row justify-start items-center">
                {menuItem?.icon}
                <Link to={menuItem?.url} className="text-white">
                  {menuItem?.label}
                </Link>
                {menuItem?.submenu && menuItem?.submenu.length > 0 && (
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className="text-white ml-2"
                  >
                    {activeSubMenus[index] ? "-" : "+"}
                  </button>
                )}
              </div>
              {menuItem?.submenu && menuItem?.submenu.length > 0 && (
                <div
                  className={`submenu-container ${
                    activeSubMenus[index] ? "show" : ""
                  }`}
                >
                  <ul>
                    {menuItem?.submenu.map((subMenuItem, subIndex) => (
                      <li key={subIndex} className="submenu-item py-1">
                        {subMenuItem?.icon}
                        <Link to={subMenuItem?.url} className="text-white">
                          {subMenuItem?.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })
      ) : (
        <li>
          <PulseLoader
            color={"#fff"}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </li>
      )}
    </ul>
  );
}
