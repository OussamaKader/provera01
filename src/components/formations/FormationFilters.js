"use client";

import React, { useState, useMemo } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import FormationCard from "@/components/formations/FormationCard";

export default function FormationFilters({ formations = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(formations.map((f) => f.category));
    return ["all", ...Array.from(cats)];
  }, [formations]);

  // Extract unique levels
  const levels = useMemo(() => {
    const lvls = new Set(formations.map((f) => f.level));
    return ["all", ...Array.from(lvls)];
  }, [formations]);

  // Filtered formations
  const filteredFormations = useMemo(() => {
    return formations.filter((item) => {
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.skills.some((skill) => skill.toLowerCase().includes(query));

      // Category match
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      // Format match
      const matchesFormat =
        selectedFormat === "all" ||
        item.formats.some((fmt) => fmt.toLowerCase() === selectedFormat.toLowerCase());

      // Level match
      const matchesLevel =
        selectedLevel === "all" || item.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesFormat && matchesLevel;
    });
  }, [formations, searchQuery, selectedCategory, selectedFormat, selectedLevel]);

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "all" ||
    selectedFormat !== "all" ||
    selectedLevel !== "all";

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedFormat("all");
    setSelectedLevel("all");
  };

  return (
    <div className="space-y-8">
      {/* Search and filters bar */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher par domaine, technologie (ex: Linux, Java, SQL, React...)"
            className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter chips / selects */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-200/60 text-sm">
          {/* Category Filter */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Domaine / Catégorie
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="all">Toutes les catégories</option>
              {categories
                .filter((c) => c !== "all")
                .map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
            </select>
          </div>

          {/* Format Filter */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Format d&apos;apprentissage
            </label>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="all">Tous formats (En ligne & Présentiel)</option>
              <option value="en ligne">En ligne</option>
              <option value="présentiel">Présentiel</option>
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Niveau
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="all">Tous les niveaux</option>
              {levels
                .filter((l) => l !== "all")
                .map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Active filters status / reset */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
            <span>
              {filteredFormations.length} résultat{filteredFormations.length > 1 ? "s" : ""} trouvé{filteredFormations.length > 1 ? "s" : ""}
            </span>
            <button
              type="button"
              onClick={resetFilters}
              className="text-blue-600 hover:text-blue-800 font-medium underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Réinitialiser les filtres</span>
            </button>
          </div>
        )}
      </div>

      {/* Grid of Results */}
      {filteredFormations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFormations.map((formation) => (
            <FormationCard key={formation.id} formation={formation} />
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-slate-200/70 text-slate-500 flex items-center justify-center mx-auto mb-4">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">
            Aucune formation trouvée
          </h4>
          <p className="text-slate-600 text-sm mb-5">
            Aucun parcours ne correspond à vos critères de recherche actuels.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}

