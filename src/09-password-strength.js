/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if ( password === "" || typeof password !== "string" ) {
    return "weak";
  }

  var criteria = 0;

  if(password.length >= 8) {
    criteria += 1;
  }

  var hasUpper = false;
  var hasLower = false;
  var hasNumber = false;
  var hasSpecial = false;

  for (let i = 0; i < password.length; i++) {
    var char = password[i];
    if (char >= 'a' && char <= 'z') {
      if(!hasLower) {
        hasLower = true;
        criteria += 1;
      }
    } else if (char >= 'A' && char <= 'Z') {
      if(!hasUpper) {
        hasUpper = true;
        criteria += 1;
      }
    } else if (char >= '0' && char <= '9') {
      if(!hasNumber) {
        hasNumber = true;
        criteria += 1;
      }
    } else {
      // Special Character
      if(!hasSpecial) {
        hasSpecial = true;
        criteria += 1;
      }
    }
  }
  if ( criteria === 5 ) {
    return "very strong";
  }


  if ( criteria == 1 ) {
    return "weak";
  } else if ( criteria >= 2 && criteria <= 3 ) {
    return "medium";
  } else if ( criteria == 4) {
    return "strong";
  }

}
