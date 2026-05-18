export const fadeUp = (delay = 0) => {

  return {
    hidden: {
      opacity: 0,
      y: 80
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        delay
      }
    }
  };
};

export const fadeLeft = (delay = 0) => {

  return {
    hidden: {
      opacity: 0,
      x: -80
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
        delay
      }
    }
  };
};

export const fadeRight = (delay = 0) => {

  return {
    hidden: {
      opacity: 0,
      x: 80
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
        delay
      }
    }
  };
};