export const fetchValute = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(`http://data.fixer.io/api/latest?access_key=1ae27209db692293e8928baeb31838b7&format=1`)
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
