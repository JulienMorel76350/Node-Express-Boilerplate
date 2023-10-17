class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  formatError() {
    return {
      statusCode: this.statusCode,
      message: this.message,
    };
  }
}

class BadRequestError extends CustomError {
  constructor(message = "Requête incorrecte") {
    super(message, 400);
  }
}

class NotFoundError extends CustomError {
  constructor(message = "Ressource non trouvée") {
    super(message, 404);
  }
}
class ForbiddenError extends CustomError {
  constructor(message = "Accès interdit") {
    super(message, 403);
  }
}

class InternalServerError extends CustomError {
  constructor(message = "Erreur interne du serveur") {
    super(message, 500);
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
  InternalServerError,
  ForbiddenError,
  CustomError,
};
