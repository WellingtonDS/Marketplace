import { mapFields } from "@/helpers/Helpers";

export default {
    name: "FormUser",
    computed: {
        ...mapFields({
            fields: ["name", "email", "password", "code", "street", "number", "district", "city", "state"],
            base: "user",
            mutation: "UPDATE_USER" 
        })
    }
}