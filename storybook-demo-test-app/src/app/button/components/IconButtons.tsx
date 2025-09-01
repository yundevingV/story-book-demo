import { Button } from "@yundeving/story-book-demo-ui";
import {
  FaDownload,
  FaPlus,
  FaArrowRight,
  FaHeart,
  FaShare,
} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function IconButtons() {
  return (
    <div className="space-y-6">
      {/* Left Icon Examples */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-gray-700">Left Icon</h4>
        <div className="flex flex-wrap gap-3">
          <Button label="Download" leftIcon={<FaDownload />} />
          <Button label="Add New" leftIcon={<FaPlus />} variant="primary" />
          <Button label="Like" leftIcon={<FaHeart />} variant="error" />
        </div>
      </div>

      {/* Right Icon Examples */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-gray-700">Right Icon</h4>
        <div className="flex flex-wrap gap-3">
          <Button label="Continue" rightIcon={<FaArrowRight />} />
          <Button label="Share" rightIcon={<FaShare />} variant="secondary" />
          <Button
            label="External Link"
            rightIcon={<HiOutlineExternalLink />}
            variant="ghost"
          />
        </div>
      </div>

      {/* Both Icons */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-gray-700">Both Icons</h4>
        <div className="flex flex-wrap gap-3">
          <Button
            label="Process"
            leftIcon={<FaPlus />}
            rightIcon={<FaArrowRight />}
            variant="accent"
          />
        </div>
      </div>

      {/* Icon Only */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-gray-700">Icon Only</h4>
        <div className="flex flex-wrap items-center gap-3">
          <Button leftIcon={<FaDownload />} size="sm" />
          <Button leftIcon={<FaPlus />} size="md" variant="primary" />
          <Button leftIcon={<FaHeart />} size="lg" variant="error" />
        </div>
      </div>

      {/* Loading with Icons */}
      <div>
        <h4 className="mb-3 text-sm font-medium text-gray-700">
          Loading State
        </h4>
        <div className="flex flex-wrap items-center gap-3">
          <Button label="Loading" leftIcon={<FaDownload />} isLoading />
          <Button
            label="Loading"
            rightIcon={<FaArrowRight />}
            isLoading
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
}
