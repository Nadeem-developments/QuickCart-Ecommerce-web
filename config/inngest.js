import { Inngest } from "inngest";
import connectDB from "./db";
import User from "../models/User";

export const inngest = new Inngest({ id: "quickcart" });

export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, image_url, email_addresses } =
      event.data;

    const email = email_addresses?.[0]?.email_address || "";
    const name = `${first_name || ""} ${last_name || ""}`.trim();

    await connectDB();
    await User.findByIdAndUpdate(
      id,
      { _id: id, email, name, imageUrl: image_url },
      { upsert: true, new: true }
    );
  }
);

export const syncUserUpdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, image_url, email_addresses } =
      event.data;

    const email = email_addresses?.[0]?.email_address || "";
    const name = `${first_name || ""} ${last_name || ""}`.trim();

    await connectDB();
    await User.findByIdAndUpdate(id, { email, name, imageUrl: image_url });
  }
);

export const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;

    await connectDB();
    const result = await User.findByIdAndDelete(id);

    if (!result) {
      // fallback: delete by _id field directly
      await User.deleteOne({ _id: id });
    }
  }
);
