async function handleApiResponse(response, messageApi, onSuccess, onFail) {
  if(response.code === 200) {
    messageApi.success(response.message);
    if (onSuccess) onSuccess();
  }else {
    messageApi.error(response.message);
    if (onFail) onFail();
  }
}

export { handleApiResponse }