export default {
    handelError(thiz, error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.error &&
        error.response.data.error.details &&
        error.response.data.error.details[0] &&
        error.response.data.error.details[0].message
      ) {
        this.$toast.toastError(error.response.data.error.details[0].message);
        return
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.error &&
        error.response.data.error.details == null
      ) {
        thiz.$toast.toastError(error.response.data.error.message);
        return
      } else {
        thiz.$toast.toastError(
          "مشکلی در انجام عملیات رخ داد. لطفا دوباره امتحان کنید."
        );
        return
      }
    }
  };
