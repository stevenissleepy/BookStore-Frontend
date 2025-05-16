async function handleApiResponse(ok, messageApi, successMsg, failMsg,  onOk, onFail) {
  if(ok === 200) {
    successMsg && messageApi.success(successMsg, 0.5);
    onSuccess && onSuccess();
  }else {
    failMsg && messageApi.error(failMsg, 0.5);
    onFail && onFail();
  }
}

export { handleApiResponse }