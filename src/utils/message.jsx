async function handleApiResponse(ok, messageApi, successMsg, failMsg,  onOk, onFail) {
  if(ok) {
    successMsg && messageApi.success(successMsg, 0.5);
    onOk && onOk();
  }else {
    failMsg && messageApi.error(failMsg, 0.5);
    onFail && onFail();
  }
}

export { handleApiResponse }