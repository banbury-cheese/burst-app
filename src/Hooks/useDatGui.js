import { useEffect, useState } from "react";

const useDatGui = (settings) => {
  let gui;

  const [options, set] = useState({
    wireframe: false,
    showGui: true,
  });

  useEffect(() => {
    const datGuiClass = document.getElementsByClassName("dg main");

    if (datGuiClass?.length === 0) {
      const dat = require("dat.gui");
      gui = new dat.GUI();
      gui.close();

      const folder1 = gui.addFolder("Noise");
      const folder2 = gui.addFolder("Rotation");
      const folder3 = gui.addFolder("Color Intensity");
      const folder4 = gui.addFolder("Color Brightness");
      const folder5 = gui.addFolder("Color Contrast");
      const folder6 = gui.addFolder("Color Oscilation");
      const folder7 = gui.addFolder("Color Phase");
      const folder8 = gui.addFolder("Other");

      folder1.add(settings, "speed", 0.1, 1, 0.01);
      folder1.add(settings, "density", 0, 10, 0.01);
      folder1.add(settings, "strength", 0, 2, 0.01);

      folder2.add(settings, "frequency", 0, 10, 0.1);
      folder2.add(settings, "amplitude", 0, 10, 0.1);

      folder3.add(settings, "intensity", 0, 10, 0.1);

      folder4.add(settings, "brighthness_R", -3.1, 3.1, 0.1);
      folder4.add(settings, "brighthness_G", -3.1, 3.1, 0.1);
      folder4.add(settings, "brighthness_B", -3.1, 3.1, 0.1);

      folder5.add(settings, "contrast_R", -3.1, 3.1, 0.1);
      folder5.add(settings, "contrast_G", -3.1, 3.1, 0.1);
      folder5.add(settings, "contrast_B", -3.1, 3.1, 0.1);

      folder6.add(settings, "oscillation_R", -3.1, 3.1, 0.1);
      folder6.add(settings, "oscillation_G", -3.1, 3.1, 0.1);
      folder6.add(settings, "oscillation_B", -3.1, 3.1, 0.1);

      folder7.add(settings, "phase_R", -3.1, 3.1, 0.1);
      folder7.add(settings, "phase_G", -3.1, 3.1, 0.1);
      folder7.add(settings, "phase_B", -3.1, 3.1, 0.1);

      const onClickWireframe = (value) => set({ ...options, wireframe: value });
      const onClickToggleGui = (value) => dat.GUI.toggleHide();

      folder8.add(settings, "wireframe").name("wireframe").onChange(onClickWireframe);
      folder8.add(settings, "showGui").name("showGui").onChange(onClickToggleGui);
    }
  }, []);

  return options;
};

export default useDatGui;
