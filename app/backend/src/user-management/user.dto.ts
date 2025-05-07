import Joi from "joi";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  profession?: string;
  location?: string;
  age?: number;
  bio?: string;
  profileImageUrl?: string;
  tags?: Tag[];
  isVerified: string;
  verificationToken?: string;
  verificationTokenExpiresAt?: Date;
  registrationDate: Date;
}

export interface Tag {
  id: string;
  name: string;
}

// User creation validation schema
export const createUserDTO = Joi.object({
  name: Joi.string().required().min(2).max(50),
  email: Joi.string().email().required(),
  password: Joi.string()
    .required()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .message(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

// User profile update validation schema
export const updateUserProfileDTO = Joi.object({
  profession: Joi.string().trim().max(100).optional(),
  industry: Joi.string().trim().max(100).optional(),
  location: Joi.string().trim().max(100).optional(),
  age: Joi.number().integer().min(18).max(120).optional(),
  bio: Joi.string().trim().max(500).optional(),
  tags: Joi.array().items(Joi.string()).max(10).optional(),
  showAge: Joi.boolean().optional(), // Allow showAge as a boolean
  showProfile: Joi.boolean().optional(), // Allow showProfile as a boolean
});

// Usage in controller or service

export const validateUserInput = (data: any, schema: Joi.ObjectSchema) => {
  const { error, value } = schema.validate(data, { abortEarly: false });
  if (error) {
    console.error("Validation Errors:", error.details); // Log validation errors
    const errors = error.details.map((detail) => ({
      field: detail.path[0],
      message: detail.message,
    }));
    return { isValid: false, errors, value: null };
  }
  return { isValid: true, errors: null, value };
};
