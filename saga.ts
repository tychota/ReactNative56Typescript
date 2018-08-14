import { takeLatest, put } from "redux-saga/effects";

function* randomCrement() {
  if (Math.random() < 0.5) {
    yield put({ type: "DECREMENT" });
  } else {
    yield put({ type: "INCREMENT" });
  }
}

export function* saga() {
  yield takeLatest("RANDOMCREMENT", randomCrement);
}
