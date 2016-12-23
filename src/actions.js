
// Websockets actions

export const WS_CONNECTION_FAILED = 'WS_CONNECTION_FAILED';
export function wsConnectionFailed() {
  return {
    type: WS_CONNECTION_FAILED
  };
}

export const WS_RECEIVED_MESSAGE = 'WS_RECEIVED_MESSAGE';
export function wsReceivedMessage(message) {
  return {
    type: WS_RECEIVED_MESSAGE,
    message
  };
}

export const WS_HANDSHAKE_FAILED = 'WS_HANDSHAKE_FAILED';
export function wsHandshakeFailed() {
  return {
    type: WS_HANDSHAKE_FAILED
  };
}

export const WS_CONNECTION_READY = 'WS_CONNECTION_READY';
export function wsConnectionReady(connection) {
  return {
    type: WS_CONNECTION_READY,
    connection
  };
}

// Timer+project data fetch actions

export const MAKE_TIMERS_STALE = 'MAKE_TIMERS_STALE';
export function makeTimersStale() {
  return {
    type: MAKE_TIMERS_STALE
  }
}

export const REQUEST_TIMERS_PROJECTS = 'REQUEST_TIMERS_PROJECTS';
export function requestTimersAndProjects() {
  return {
    type: REQUEST_TIMERS_PROJECTS
  }
}

export const RECEIVE_TIMERS_PROJECTS = 'RECEIVE_TIMERS_PROJECTS';
export function receiveTimersAndProjects(entities) {
  return {
    type: RECEIVE_TIMERS_PROJECTS,
    entities
  }
}

export const REQUEST_TIMERS_PROJECTS_FAILED = 'REQUEST_TIMERS_PROJECTS_FAILED';
export function requestTimersAndProjectsFailed() {
  return {
    type: REQUEST_TIMERS_PROJECTS_FAILED
  }
}

// User actions

export const USER_SIGNED_IN = 'USER_SIGNED_IN';
export function userSignedIn(googleUser) {
  return {
    type: USER_SIGNED_IN,
    googleUser
  };
}

export const RECEIVE_LOCAL_USER_DATA = 'RECEIVE_LOCAL_USER_DATA';
export function receiveLocalUserData(userData) {
  return {
    type: RECEIVE_LOCAL_USER_DATA,
    userData
  };
}

// Project actions

export const PROJECT_CREATED = 'PROJECT_CREATED';
export function projectCreated(project) {
  return {
    type: PROJECT_CREATED,
    project
  };
}

// Status bar actions

export const CLEAR_STATUS_BAR = 'CLEAR_STATUS_BAR';
export function clearStatusBar() {
  return {
    type: CLEAR_STATUS_BAR
  };
}

export const SET_STATUS_BAR = 'SET_STATUS_BAR';
export function setStatusBar(message) {
  return {
    type: SET_STATUS_BAR,
    message
  };
}

export const SET_STATUS_BAR_TIMEOUT = 'SET_STATUS_BAR_TIMEOUT';
export function setStatusBarTimeout(message, timeoutSeconds) {
  return {
    type: SET_STATUS_BAR_TIMEOUT,
    message,
    timeoutSeconds
  };
}
